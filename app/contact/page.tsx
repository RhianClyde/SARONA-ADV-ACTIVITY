"use client";
import { useRouter } from "next/navigation";
export default function Contact() {
  const router = useRouter();
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <p>Email: rhianclyde.sarona@hcdc.edu.ph</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}
