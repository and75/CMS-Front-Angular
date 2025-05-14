# t-co.re Admin Dashboard

This project is an Angular-based admin dashboard for managing content on the t-co.re website. It provides interfaces for managing news, events, team members, bibliography, resources, and network connections.

## Features

- User authentication and authorization
- Content management for:
  - News articles
  - Events
  - Team members
  - Bibliography entries
  - Resources
  - Network connections
- Responsive design using Bootstrap
- Interactive UI components
- Particle.js background effects

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── admin/         # Admin dashboard components
│   ├── core/          # Core services, models, and utilities
│   ├── pages/         # Public pages components
│   └── shared/        # Shared components and modules
├── assets/            # Static assets
└── environments/      # Environment configurations
```

## Development

- Run `npm run dev` to start the development server
- Run `npm run build` to build the project
- Run `npm run test` to execute unit tests

## Environment Variables

The project uses the following environment variables:

```typescript
export const environment = {
  production: boolean,
  apiUrl: string,
  routeMother: string
};
```

## Deployment

The project can be deployed to Netlify. The deployment process is handled automatically through the platform's CI/CD pipeline.

## Built With

- Angular 18
- Bootstrap 5
- Particles.js
- RxJS
- TypeScript

## License

This project is proprietary and confidential. All rights reserved.