import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const features = [
  ["01", "Authentication ready", "Signup, login, hashed passwords, JWT, and protected routes."],
  ["02", "Clean foundation", "A simple React + Express structure that is easy to extend."],
  ["03", "Deployment friendly", "Vercel-ready frontend and environment-based API configuration."],
];

export default function Home() {
  const { user } = useAuth();

  return (
    <main>
      <section className="container hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> YOUR NEXT HACKATHON STARTS HERE</span>
          <h1>Build the idea.<br /><span>Skip the setup.</span></h1>
          <p className="hero-description">
            A reusable MERN starter with authentication, protected pages, and a
            deployment-ready structure. Spend your time solving the problem, not
            wiring up boilerplate.
          </p>
          <div className="actions">
            <Link className="btn" to={user ? "/dashboard" : "/signup"}>
              {user ? "Open dashboard" : "Create your account"} <span aria-hidden="true">↗</span>
            </Link>
            {!user && <Link className="btn btn-outline" to="/login">Log in</Link>}
          </div>
          <div className="hero-meta"><span>React + Vite</span><span>Express API</span><span>MongoDB</span></div>
        </div>
        <div className="hero-art" aria-label="Code editor preview">
          <div className="editor">
            <div className="editor-top"><div className="window-dots"><i /><i /><i /></div><span>server.js</span><span className="editor-status">● ready</span></div>
            <div className="editor-body">
              <p><span className="line-no">1</span><span className="code-purple">import</span> express <span className="code-purple">from</span> <span className="code-green">"express"</span>;</p>
              <p><span className="line-no">2</span><span className="code-purple">import</span> { "{ connectDB }" } <span className="code-purple">from</span> <span className="code-green">"./config/db.js"</span>;</p>
              <p><span className="line-no">3</span></p>
              <p><span className="line-no">4</span><span className="code-purple">const</span> app = express();</p>
              <p><span className="line-no">5</span></p>
              <p><span className="line-no">6</span>app.<span className="code-blue">use</span>(express.<span className="code-blue">json</span>());</p>
              <p><span className="line-no">7</span>app.<span className="code-blue">listen</span>(<span className="code-orange">5000</span>);</p>
              <div className="editor-success"><span>✓</span> API initialized successfully</div>
            </div>
          </div>
          <div className="floating-card"><span className="floating-icon">✓</span><div><strong>Ready to build</strong><small>Your next idea starts here</small></div></div>
        </div>
      </section>
      <section className="container feature-section">
        <div className="section-heading"><div><p className="eyebrow">THE STARTER KIT</p><h2>The boring parts, <span>handled.</span></h2></div><p>Everything you need to get moving, without locking you into a specific product idea.</p></div>
        <div className="feature-grid">
          {features.map(([number, title, description]) => (
            <article className="feature-card" key={number}>
              <span className="feature-number">{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
