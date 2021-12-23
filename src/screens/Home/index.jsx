import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="route-box">
        <h1>Manage your library</h1>
        <div className="route-card">
          <Link className="login-btn" to="/books"><h2>Books</h2></Link>
        </div>
        <div className="route-card">
          <Link className="login-btn" to="/authors"><h2>Authors</h2></Link>
        </div>
        <div className="route-card">
          <Link className="login-btn" to="/categories"><h2>Categories</h2></Link>
        </div>
      </div>
      <div className="login-box">
        <h1>Administrator log in</h1>
        <div className="login-card">
          <Link className="login-btn" to="/login"><h2>Log in</h2></Link>
        </div>
        <div className="login-card hidden">
          <Link className="login-btn" to="/login"><h2>Log in</h2></Link>
        </div>
        <div className="login-card hidden">
          <Link className="login-btn" to="/login"><h2>Log in</h2></Link>
        </div>
      </div>
    </div>
  );
}