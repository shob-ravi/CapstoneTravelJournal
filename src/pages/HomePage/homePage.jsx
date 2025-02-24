import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <nav>
        <Link to="/auth">Get Started</Link>
        <Link to="/auth">Start to Explore</Link>
      </nav>
    </div>
  );
}
