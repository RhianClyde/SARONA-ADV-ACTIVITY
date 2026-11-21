import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <Link className="nav-button" href="/profile">
        Profile
      </Link>
      <Link className="nav-button" href="/contact">
        Contact
      </Link>
    </div>
  );
}
