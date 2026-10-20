import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <main className="container dashboard">
      <p className="eyebrow"><span className="status-dot" /> PRIVATE WORKSPACE</p>
      <h1>Welcome, {user?.name?.split(" ")[0] || "builder"}.</h1>
      <p className="hero-description">Your starter is running. Replace this dashboard with the core experience for your hackathon project.</p>
      <div className="dashboard-grid">
        <article className="dashboard-card"><span className="dashboard-icon">✓</span><h2>Authentication works</h2><p>Your session is active and this route is protected.</p></article>
        <article className="dashboard-card"><span className="dashboard-icon">⌘</span><h2>Ready for your idea</h2><p>Add your feature-specific models, API routes, and UI components here.</p></article>
      </div>
      <div className="account-row"><div><small>Signed in as</small><strong>{user?.email}</strong></div><span className="account-pill">Account active</span></div>
    </main>
  );
}
