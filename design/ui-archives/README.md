# UI version archives

These ZIP files preserve source code and image assets. They do not change the active website or Git history. Build output, installed dependencies, and nested archives are excluded from working-tree snapshots.

| Archive | Version |
| --- | --- |
| `01-initial-766593e.zip` | Initial Vue résumé website, commit `766593e`. |
| `02-mint-2689a8e.zip` | First mint design, commit `2689a8e`. |
| `03-before-redesign-c9f06ad.zip` | Complete website before the current redesign, including AI Library and the original Education and Toolbox. |
| `04-coral-manrope-current.zip` | Current working UI: coral title, Manrope, transparent portrait, lavender cards, fluid hero, and three-column Projects on wide screens. |

The intermediate uncommitted edits made during the redesign were not recorded as separate complete versions. They are not represented as exact snapshots here.

## Preview or restore

Extract a ZIP to a separate directory. Run `npm ci` and `npm run dev` inside the extracted project, using the Node/npm versions in its package configuration. The current checkout can remain open while inspecting an archive. To restore, compare the extracted files and copy the desired changes back into the checkout.

## Save another checkpoint

From the repository root:

```bash
python3 scripts/archive-ui.py --name 05-next-ui
```

To archive a Git revision:

```bash
python3 scripts/archive-ui.py --name milestone-name --ref COMMIT_SHA
```

Names cannot overwrite an existing snapshot. A JSON sidecar records the source revision, file count, and SHA-256 checksum for each ZIP. The current snapshot includes local source changes and untracked, non-ignored assets. Environment and private-key files are excluded.
