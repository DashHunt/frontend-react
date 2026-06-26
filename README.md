# Frontend-React Node Portfolio

A collection of frontend/SPA applications built with React.js and TypeScript, showcasing software architecture, design, UI/UX, and modern frontend development practices.

The goal of this repository is to serve as both a personal portfolio and a playground for experimenting with new technologies, architectural patterns, and AI-powered solutions.

### REPOSITORY STRUCTURE

This repository follows a **monorepo architecture**, where multiple React.js/TypeScript frontend/SPA applications are maintained in a single repository.

The goal is to centralize development standards, architectural patterns, reusable solutions, and project organization while keeping each application isolated and independently deployable.

frontend/
│
├── coutinho-team-spa/              # SPA application for Coutinho Team
├── coutinho-team-spa/              # SPA application for Nexus
│
└── README.md                       # Repository documentation

Each project is a self-contained application with its own:

- Business rules
- UI/UX patterns
- Design systems
- Dependencies
- Tests

Despite being independent applications, all projects follow the same engineering standards regarding:

- Clean Architecture principles
- Layered application design
- SOLID principles
- Error handling
- Forms handling
- Input validation
- Testing strategies
- Documentation practices

This repository serves both as a personal portfolio and as a collection of production-oriented backend applications designed to demonstrate software engineering, system design, API development, caching strategies, and modern backend development practices.

### TECHNOLOGIES
- React.js
- React Tanstack
- TypeScript
- Design libs

### PROJECT STRUCTURE

The structure below represents the standard architecture used across most React/Typescript projects in this repository. 
Depending on the project's complexity and requirements, some folders may be added, removed, or adapted.

my-react-ts-app/
├── public/                         # Static assets served directly (favicons, manifest.json)
├── src/                            # Main source code directory
│   ├── assets/                     # Global static media (images, global SVGs, fonts)
│   │   └── images/     
│   ├── components/                 # Folder for components
│   │       │── ui/                 # Shared, global UI building blocks (design system)
│   │       │   └── Card.tsx
│   │       └── Button/             # Specific component
│   │           ├── Button.tsx          # Components
│   │           ├── Button.test.tsx     # Tests for this components
│   │           └── index.ts            # Barrel export for clean imports
│   ├── config/                     # Environment variables and global constants
│   ├── context/                    # App-wide global React Context providers
│   ├── features/                   # Feature-based modules (Domain Driven)
│   │   └── auth/                   # Example: Authentication feature
│   │       ├── components/         # Components exclusive to this feature
│   │       ├── hooks/              # Feature-specific custom hooks (e.g., useAuth)
│   │       ├── services/           # API requests specific to auth
│   │       ├── types/              # Auth-specific TypeScript interfaces
│   │       └── index.ts            # Public API for the feature (barrel file)
│   ├── hooks/                      # Reusable global custom hooks (e.g., useDebounce)
│   ├── layouts/                    # Page shell layouts (e.g., SidebarLayout, AuthLayout)
│   ├── pages/                      # Route components mapped to your router
│   │   └── Dashboard/
│   │       └── DashboardPage.tsx
│   ├── routes/                     # Router configuration (e.g., React Router setup)
│   ├── services/                   # Global API clients (Axios/Fetch instances)
│   │   └── apiClient.ts        
│   ├── store/                      # Global state management (Redux Toolkit, Zustand)
│   ├── types/                      # Globally shared TypeScript definitions
│   │   └── common.ts       
│   ├── utils/                      # Pure utility helper functions (e.g., formatters)
│   ├── App.tsx                     # Root component
│   ├── main.tsx                    # App entry point (or index.tsx)
│   └── index.css                   # Global stylesheet
├── .env                            # Environment variables
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build config

### AI & AUTOMATION

Some projects may include integrations with AI-powered services and automation workflows.

Examples:

- LLM integrations
- Agent-based architectures
- Recommendation engines
- Content generation
- Process automation

AI services are implemented as isolated modules to maintain loose coupling and provider flexibility.