# EquityScope AI

EquityScope AI is a dark-mode investment research dashboard built with React + TypeScript.

## Overview

This project provides a professional UI for researching public companies, reviewing financial health, analyzing stock technicals, comparing valuation assumptions, and generating investment reports. The app is designed to connect to a Python backend later through an API integration layer.

## Features

- Company search for U.S.-listed stocks
- Market overview cards and data freshness badges
- Company overview, financial, technical, valuation, risk, and research report tabs
- Stock screener with configurable filters
- Watchlist and peer comparison
- Demo-state data with clear labeling and data-quality disclaimers
- Environment-based API configuration for backend integration
- Netlify-ready SPA setup

## Local development

1. Install dependencies:
   npm install
2. Create an environment file:
   cp .env.example .env
3. Start the app:
   npm run dev
4. Build for production:
   npm run build
5. Run tests:
   npm test

## Environment variables

- VITE_API_BASE_URL: base URL for the backend API, e.g. `http://localhost:8000`

## Backend integration

The frontend uses a modular API layer in `src/api` to make requests to endpoints such as:

- `GET /api/company/:ticker`
- `GET /api/company/:ticker/financials`
- `GET /api/company/:ticker/prices`
- `GET /api/company/:ticker/technicals`
- `GET /api/company/:ticker/valuation`
- `GET /api/company/:ticker/risks`
- `POST /api/screener`
- `POST /api/reports`

The app intentionally does not expose API keys in browser code and expects private credentials to be supplied by the backend or server-side environment.

## Deployment on Netlify

1. Push the repository to GitHub.
2. Import the repo in Netlify.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Set the environment variable `VITE_API_BASE_URL` to your backend URL.
6. Deploy.

## Data and validation rules

- No fabricated financial statements, market prices, or technical indicators.
- Missing values are not treated as zero.
- Reporting dates and data sources are displayed where available.
- Demo data is clearly labeled as demonstration-only.
- Live analysis only appears when a verified backend or data provider is connected.

## Disclaimer

This application is for research purposes only and does not provide investment advice, automated trade decisions, or guaranteed returns.
