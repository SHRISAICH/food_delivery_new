# Frontend (Feastly)

Local dev
1. Create .env file in the frontend folder:
   - cp .env.example .env
   - Edit .env and set VITE_API_URL to your backend origin (example: VITE_API_URL=http://localhost:5000)

2. Install & run
   cd frontend
   npm install
   npm run dev
   (Vite will serve at http://localhost:5173 by default)

Production build
   npm run build
Output folder: dist

Deploy notes
- For Netlify: Build command `npm run build`, publish directory `dist`
- For Vercel: Automatic — use `npm run build` as the build command
- Remember to set environment variable VITE_API_URL in your hosting provider to point to the deployed backend URL.
