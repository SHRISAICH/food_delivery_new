import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function Home() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Feastly</h1>
        <p className="mt-2 text-zinc-400">
          Frontend is now running. Next: full auth pages + protected routes.
        </p>
        <div className="mt-8 flex gap-3">
          <a className="rounded-lg bg-white/10 px-4 py-2 hover:bg-white/15" href="/login">
            Login
          </a>
          <a className="rounded-lg bg-amber-400 px-4 py-2 text-zinc-950 hover:bg-amber-300" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

