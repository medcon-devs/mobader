import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the About Page</h1>
      <p>Click below to navigate back to the Home page.</p>
      <Link href="/">
        {/* <a style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", textDecoration: "none", borderRadius: "5px" }}> */}
          Back to Home
        {/* </a> */}
      </Link>
    </div>
  );
}
