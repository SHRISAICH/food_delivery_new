import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Use Vite env variable (create frontend/.env: VITE_API_URL=http://localhost:5000)
  const API = import.meta.env.VITE_API_URL || "";

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(`${API}/api/auth/login`, { email, password });
      // API response shape based on backend: { success: true, data: { token, ... } }
      const token = res?.data?.data?.token;
      if (!token) throw new Error("No token received from server");
      localStorage.setItem("token", token);
      // Optionally store user info: localStorage.setItem("user", JSON.stringify(res.data.data));
      navigate("/", { replace: true });
    } catch (err) {
      // Show friendly messages
      if (err.response?.status === 401) {
        setError("Invalid email or password.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-dvh max-w-md items-center px-4">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="mt-1 text-sm text-zinc-400">Welcome back to Feastly.</p>

          {error ? (
            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="text-sm text-zinc-300">Email</label>
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 outline-none focus:border-amber-400/60"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm text-zinc-300">Password</label>
              <input
                className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2 outline-none focus:border-amber-400/60"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <button
              className="w-full rounded-lg bg-amber-400 px-4 py-2 font-semibold text-zinc-950 hover:bg-amber-300 disabled:opacity-60"
              disabled={loading}
              type="submit"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-4 text-sm text-zinc-400">
            Don’t have an account?{" "}
            <Link className="text-amber-300 hover:text-amber-200" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
