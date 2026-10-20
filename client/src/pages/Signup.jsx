import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      await signup(name, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unable to create account. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="container form-wrap">
      <form className="panel" onSubmit={handleSubmit}>
        <p className="eyebrow">GET STARTED</p>
        <h1>Create your account</h1>
        <p className="muted">A few details, then you're ready to build.</p>
        {error && <p className="error" role="alert">{error}</p>}
        <label htmlFor="name">Full name</label>
        <input id="name" type="text" autoComplete="name" minLength={2} maxLength={80} required
          value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" autoComplete="email" maxLength={254} required
          value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password <span className="label-hint">(8–72 characters)</span></label>
        <input id="password" type="password" autoComplete="new-password" minLength={8} maxLength={72} required
          value={password} onChange={(event) => setPassword(event.target.value)} />
        <button className="btn full" disabled={busy}>
          {busy ? "Creating account…" : "Create account"}
        </button>
        <p className="form-foot muted">Already have an account? <Link to="/login">Log in</Link></p>
      </form>
    </main>
  );
}
