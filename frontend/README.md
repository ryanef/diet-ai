# Recipe App

## Introduction

A full-stack application for users to get AI generated recipe ideas based on their health conditions and ingredients they currently have. 

## Tech Stack
**Frontend**: TypeScript - React 19, React Router 7
**Backend**: Python - FastAPI with Boto3 (AWS PythonSDK) and AWS BedRock (AWS AI fully managed service with AI models such as: Claude, DeepSeek, Titan, Llama)
**Authentication**: AWS Cognito
**Vector Database**: Postgres 16 with PGVector
**Infrastructure**: AWS Fargate, Docker Compose, GitHub Actions

## Road Map

- A proper landing page to come followed by dashboard. 
- Users will be able to save their ingredients and preferences after registration.
- React 19 and React Router 7 are still relatively new and major overhauls from past versions. It currently uses some of the new APIs like `use` with `Suspense` but will include more features as the dashboard is added. 
- Tests for frontend and backend
- Terraform or CloudFormation scripts for AWS Fargate

## Quickstart

To run locally, Docker Compose will be needed along with Node 20+ and Python 3.10+

For user registration/authentication, the React app is wrapped in `<AuthProvider {...cognitoAuthConfig}>` in `main.tsx` - update the `cognitoAuthConfig` details with your user pool ID and client ID. If you don't want user registration, just comment out the `<AuthProvider {...cognitoAuthConfig}>` and `</AuthProvider>` 

1. Clone the Github repo
2. `docker compose up -d` from root directory

## Sample .env to put in root directory 
```
AWS_REGION=us-east-1
API_URL=http://www.none.com
BACKEND_HOST=http://localhost:5000
FIRST_SUPERUSER=email@gmail.com
FIRST_SUPERUSER_PASSWORD=userpass
FRONTEND_HOST=http://localhost:3000
PGDATA=/var/lib/postgresql/data/pgdata
POSTGRES_PASSWORD=postgres
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DB=dietapp
POSTGRES_SERVER=db
VITE_COGNITO_AUTHORITY=https://cognito-idp.us-east-1.amazonaws.com/us-east-1_chHSDF331
VITE_COGNITO_CLIENT_ID=6DFGDFGDFGgik4auo3gm05aglggbfkrj
```