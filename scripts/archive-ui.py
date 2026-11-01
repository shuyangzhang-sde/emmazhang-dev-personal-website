#!/usr/bin/env python3
"""Save a source-only UI snapshot without modifying the checkout or Git history."""
import argparse
import hashlib
import json
from pathlib import Path
import re
import subprocess
from datetime import datetime
from zoneinfo import ZoneInfo
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parent.parent
ARCHIVES = ROOT / 'design' / 'ui-archives'

def git(*args):
    return subprocess.check_output(['git', '-C', str(ROOT), *args])

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--name', required=True, help='Descriptive snapshot name, e.g. coral-manrope')
parser.add_argument('--ref', help='Git commit to archive; omit for current working files')
args = parser.parse_args()
if not re.fullmatch(r'[a-z0-9][a-z0-9-]*', args.name):
    parser.error('--name must contain lowercase letters, digits, and hyphens only')
ARCHIVES.mkdir(parents=True, exist_ok=True)
output = ARCHIVES / f'{args.name}.zip'
metadata = output.with_suffix('.json')
if output.exists() or metadata.exists():
    parser.error('This name already exists; choose a new name to preserve the saved version')

revision = git('rev-parse', args.ref or 'HEAD').decode().strip()
if args.ref:
    subprocess.run(['git', '-C', str(ROOT), 'archive', '--format=zip',
                    f'--prefix={args.name}/', f'--output={output}', revision], check=True)
else:
    files = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode().split('\0')))
    with ZipFile(output, 'w', compression=ZIP_DEFLATED) as archive:
        for filename in files:
            if not filename or filename.startswith('design/ui-archives/'):
                continue
            path = ROOT / filename
            if not path.is_file() or path.is_symlink():
                continue
            if path.name.startswith(('.env', '.dev.vars')) or path.suffix in {'.pem', '.key'}:
                continue
            archive.write(path, f'{args.name}/{filename}')
with ZipFile(output) as archive:
    count = sum(not entry.is_dir() for entry in archive.infolist())
metadata.write_text(json.dumps({
    'name': args.name,
    'created_at': datetime.now(ZoneInfo('America/Chicago')).isoformat(timespec='seconds'),
    'source': 'git' if args.ref else 'working-tree',
    'base_commit': revision,
    'includes_uncommitted_changes': not bool(args.ref),
    'file_count': count,
    'sha256': hashlib.sha256(output.read_bytes()).hexdigest(),
}, indent=2) + '\n')
print(f'{output.relative_to(ROOT)} ({count} files)')
