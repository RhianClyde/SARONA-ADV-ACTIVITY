import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/background.mp4" type="video/mp4" />
      </video>

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
