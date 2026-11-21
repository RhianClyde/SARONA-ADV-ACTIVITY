"use client";
import { useRouter } from "next/navigation";
export default function Profile() {
  const router = useRouter();
  return (
    <div className="container">
      <h1>My Profile</h1>
      <img src="/image.png" alt="My Profile" />
      <p>
        <strong>Welcome to my profile!</strong>
      </p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
