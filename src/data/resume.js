import analyticsOverview from '../assets/projects/analytics-overview.jpg'
import analyticsActivity from '../assets/projects/analytics-activity.jpg'
import illinirentHome from '../assets/projects/illinirent-home.jpg'
import mailpilotOverview from '../assets/projects/mailpilot-overview.png'

// All site content lives here — edit this file, not the components.

export const profile = {
  name: 'Emma Zhang',
  greeting: "Hello, I'm",
  tagline: 'I build AI-powered products end to end.',
  // Target roles, rendered as chips under the tagline. `primary: true` gets the
  // filled mint treatment — exactly one role should carry it.
  roles: [
    { label: 'AI Engineer', primary: true },
    { label: 'Full-Stack Software Engineer' },
    { label: 'Software Development Engineer' },
  ],
  subtitle:
    "Across internships and freelance work I've owned the whole path to production: the AI layer, the services behind it, and the cloud infrastructure it runs on.",
  email: 'sz94@illinois.edu',
  location: 'Champaign, IL',
  // Drop the PDF into /public and update this path when ready
  resumeUrl: null,
  links: [
    { label: 'GitHub', url: 'https://github.com/emmazhang-ai-sde' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shuyangzhang-ai-sde/' },
  ],
}

// Experience and projects updated from EMMA_ZHANG_Resume_NG_Dec2026.docx.
export const experience = [
  {
    "company": "GlobiFYE",
    "descriptor": "B2B Business Services Outsourcing",
    "role": "AI Engineer Intern",
    "dates": "May 2026 – Sep 2026",
    "location": "Atlanta, GA · Remote",
    "bullets": [
      "Built a RAG-powered LiveKit voice sales agent handling 1,000+ calls/month, with AI-to-human handoff and post-call coaching insights for 20+ reps.",
      "Cut voice latency by 40% to under 800ms by reworking LiveKit streaming, turn-taking, and call-state management across agent and human handoffs.",
      "Designed a tool-calling orchestration layer that selects actions from customer intent, playbooks, and CRM data, resolving 65% of calls autonomously.",
      "Engineered Haystack RAG pipeline indexing knowledge base documents and 500+ CRM records in Qdrant with Cohere embed-v4.0 for top-3 retrieval.",
      "Reached 90% accuracy on 500+ sampled live-call answers by grounding replies in the knowledge base and capping tool loops at 3 calls before handoff.",
      "Shipped 2x faster in Agile/Scrum sprints by delegating tasks to Claude Code and Codex sub-agents and validating generated code with automated tests."
    ],
    "stack": [
      "LiveKit",
      "Haystack",
      "RAG",
      "Qdrant",
      "Cohere embed-v4.0",
      "Tool Calling",
      "Claude Code",
      "Codex"
    ]
  },
  {
    "company": "Tang Matcha House",
    "descriptor": "Matcha café ordering platform",
    "role": "Freelance Software Engineer",
    "dates": "Dec 2025 – Jan 2026",
    "location": "Xi’an, China",
    "bullets": [
      "Built a React and TypeScript single-page app for a matcha café, managing cart, order lifecycle, and payment state with hooks for 1000+ orders/week.",
      "Developed serverless RESTful APIs on API Gateway and Lambda with DynamoDB storage for order creation, tracking, history, and pickup QR codes.",
      "Implemented real-time order status updates over WebSocket, replacing client polling with state changes pushed from the backend as orders progress.",
      "Provisioned infra as code with AWS CDK in TypeScript on CloudFormation and automated deployments with CI/CD, accelerating rollouts by 60%.",
      "Wrote Vitest unit tests for business logic and Supertest integration tests covering authorization, payment, pickup verification, and attack paths."
    ],
    "stack": [
      "React",
      "TypeScript",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "WebSocket",
      "AWS CDK",
      "Vitest",
      "Supertest"
    ]
  },
  {
    "company": "Chongqing Jingkai Trading Co., Ltd.",
    "descriptor": "B2C Cross-Border E-commerce Company",
    "role": "Full-stack Software Development Intern",
    "dates": "May 2025 – Aug 2025",
    "location": "Chongqing, China",
    "bullets": [
      "Eliminated overselling at 5,000+ QPS during Prime Day using Redis and Lua atomic stock deduction and distributed locks in a flash-sale backend.",
      "Cut peak database write load by 60% with RocketMQ event-driven asynchronous order processing that decouples inventory, order, and payment services.",
      "Designed Spring Boot microservice for marketplace where merchants onboard and sell, using Spring Cloud Gateway, service discovery, and OpenFeign.",
      "Built an Angular merchant portal and a React and Next.js storefront in TypeScript with Tailwind CSS, using SSG/SSR and lazy loading for fast loads.",
      "Deployed Docker containers on Kubernetes across multiple AWS EC2 instances with load balancing and auto-scaling groups, sustaining 99.9% uptime.",
      "Wrote JUnit and Mockito unit tests across the inventory, order, and payment microservices, holding 80% test coverage in the Spring Cloud codebase."
    ],
    "stack": [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Redis",
      "Lua",
      "RocketMQ",
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "JUnit",
      "Mockito"
    ]
  }
]

export const sideProjects = [
  {
    "name": "Real-Time Analytics Dashboard",
    images: [
      { src: analyticsOverview, alt: 'Analytics dashboard showing live metrics and the latest Wikimedia changes', label: 'Live overview' },
      { src: analyticsActivity, alt: 'Analytics activity chart with changes per minute, busiest sites, and bot activity', label: 'Activity breakdown' },
    ],
    "descriptor": "Live event streaming and historical analytics",
    "visualTitle": "Every event. In real time.",
    "visualCaption": "100K+ EVENTS / DAY",
    "description": "Built a Flask and React dashboard that streams 100K+ events/day to browsers through Kafka, Redis pub/sub, and WebSocket at sub-100ms latency.",
    "bullets": [
      "Designed an indexed PostgreSQL schema with SQL aggregation queries over 5M+ event records, cutting average query latency by 50% for dashboards.",
      "Containerized the dashboard stack with Docker and deployed it on Kubernetes, auto-scaling WebSocket workers to support 1,000+ concurrent users.",
      "Exposed event history and metrics through Flask RESTful APIs that the React frontend queries for historical charts alongside live WebSocket updates.",
      "Automated builds and tests with GitHub Actions CI/CD, running unit tests and container image builds on every pull request before each release."
    ],
    "stack": [
      "Python",
      "Flask",
      "React",
      "WebSocket",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "GitHub Actions"
    ],
    "links": [
      { "label": "Live", "url": "https://analytics.emmazhang.dev/" },
      { "label": "GitHub", "url": "https://github.com/emmazhang-ai-sde/realtime-analytics-dashboard" }
    ]
  },
  {
    "name": "UIUC Housing Search Platform",
    images: [{ src: illinirentHome, alt: 'IlliniRent housing search homepage with a Champaign-Urbana map and listing search', label: 'IlliniRent homepage' }],
    "descriptor": "Housing search and price-per-bed comparison",
    "visualTitle": "Find your place.",
    "visualCaption": "1,100+ FLOOR PLANS / UIUC",
    "description": "Launched a housing search platform serving 500 students who compare 1,100+ Champaign-Urbana floor plans by price per bed across the rental market.",
    "bullets": [
      "Built a Playwright scraping pipeline with geocoding and versioned SQLite snapshots, unifying 580+ properties from many listings into one dataset.",
      "Developed FastAPI APIs serving floor-plan search, filtering, and price-per-bed comparison, deployed on Railway behind a Vercel Next.js frontend.",
      "Created a Next.js map view with MapLibre showing listings by location, plus Supabase authentication and an admin dashboard for managing listings.",
      "Gated releases with GitHub Actions CI/CD that runs Playwright end-to-end tests and scraper smoke checks before each Vercel and Railway deploy."
    ],
    "stack": [
      "Next.js",
      "FastAPI",
      "Supabase",
      "MapLibre",
      "Playwright",
      "SQLite",
      "Railway",
      "Vercel",
      "GitHub Actions"
    ],
    "links": [
      {
        "label": "Live",
        "url": "https://illinirent.com/"
      },
      { "label": "GitHub", "url": "https://github.com/emmazhang-ai-sde/uiuc-housing-serach-website" }
    ]
  },
  {
    "name": "AI Email Copilot for Cross-Border E-Commerce",
    images: [{ src: mailpilotOverview, alt: 'MailPilot project overview describing its multilingual AI email assistant and architecture documentation', label: 'MailPilot overview' }],
    "descriptor": "RAG-powered email drafting for cross-border sales",
    "visualTitle": "From documents. To drafts.",
    "visualCaption": "RAG / EMAIL COPILOT",
    "description": "Built a FastAPI, LangChain, and RAG copilot that drafts emails for cross-border sales reps from product data, cutting quote preparation time by 60%.",
    "bullets": [
      "Developed a Docling IDP pipeline with OCR, layout-aware parsing, and semantic chunking, staging parsed documents in S3 to make them RAG-ready.",
      "Indexed product and import/export policy data with Titan Embeddings V2 on OpenSearch for in-context retrieval when the copilot drafts reply emails.",
      "Deployed the copilot on Docker and Kubernetes (EKS) with AWS SES email routing, sustaining P95 latency under 800ms at thousands of emails/day.",
      "Monitored LLM cost and quality with Grafana and LangSmith dashboard, and secured customer email data with AES-GCM encryption and JWT RBAC."
    ],
    "stack": [
      "RAG",
      "FastAPI",
      "LangChain",
      "Docling",
      "OpenSearch",
      "AWS Bedrock",
      "Titan Embeddings V2",
      "EKS",
      "S3",
      "AWS SES",
      "Grafana",
      "LangSmith"
    ],
    "links": [{ "label": "GitHub", "url": "https://github.com/emmazhang-ai-sde/trade-mail-copilot" }]
  }

]

// Skills grouped into four compact areas for the portfolio.
export const skills = [
  {
    "category": "Languages & Frontend",
    "items": [
      "Java",
      "Python",
      "C#",
      "C++",
      "TypeScript/JavaScript",
      "React.js",
      "Next.js",
      "React",
      "Vue.js",
      "HTML",
      "CSS",
      "Angular"
    ]
  },
  {
    "category": "Backend & Data",
    "items": [
      "Spring Boot",
      "Spring Cloud",
      "Node.js/Express",
      "FastAPI/Flask",
      "Django",
      "REST",
      "gRPC",
      "WebSockets",
      "Kafka/Flink",
      "JWT",
      "MySQL",
      "SQL/NoSQL schema design",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "ElasticSearch"
    ]
  },
  {
    "category": "AI & Creative Tools",
    "items": [
      "RAG",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "MLOps",
      "Codex",
      "Claude Code",
      "Figma",
      "Open Design",
      "Stitch"
    ]
  },
  {
    "category": "Cloud & Engineering",
    "items": [
      "AWS",
      "EC2",
      "S3",
      "Lambda",
      "DynamoDB",
      "RDS",
      "SES",
      "CloudWatch",
      "EventBridge",
      "AutoScaling",
      "CloudFormation/CDK",
      "Azure",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Prometheus",
      "Grafana",
      "Agile/Scrum",
      "Distributed Systems Design",
      "Code Review",
      "Unit Testing (JUnit, Mockito)",
      "Integration Testing",
      "SDLC"
    ]
  }
]

export const education = {
  shortName: 'UIUC',
  school: 'University of Illinois Urbana-Champaign',
  degree: 'B.S. in General Mathematics',
  minor: 'Minor in Computer Science',
  graduation: 'Aug 2024 – Dec 2026 (Expected)',
  location: 'Champaign, IL',
}
