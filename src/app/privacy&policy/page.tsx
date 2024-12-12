import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
    
    
    style={{
        backgroundImage: "url('/static/images/banner.png')", // Corrected syntax
        backgroundSize: "cover", // Ensure the image covers the div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", 
        padding:"40px",
        
        
    }}
    >
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.8",
        color: "#222",
        backgroundColor: "#ffffff",
        padding: "40px",
        maxWidth: "900px",
        margin: " auto",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
     // Prevent tiling
        
      }}
    >
      <h1
        style={{
          color: "#004080",
          fontSize: "2.5rem",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Privacy Policy
      </h1>
      <p>
        <strong>MEDCON Conferences and Exhibitions</strong>, established in the
        United Arab Emirates ("us", "we", or "our"), operates{" "}
        <a
          href="https://diabafrica.com"
          style={{ color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}
        >
          https://diabafrica.com
        </a>{" "}
        (the "Site") as well as a messaging platform for efficient and
        convenient operation via the Site, email, SMS, or MMS (the "Service").
        Protecting the data security of medical professionals attending our
        programs, visiting our websites, and using our educational services is
        of crucial importance.
      </p>
      <p>
        This Privacy Policy informs you of our policies regarding the
        collection, usage, and disclosure of personal information we receive
        from users of the Site or Service. By using the Site or Service, you
        agree to the collection and use of information in accordance with this
        policy.
      </p>

      <h2 style={{ color: "#004080", marginTop: "30px" }}>Information Collection and Use</h2>
      <p>
        While using our Site or Service, we may ask you to provide us with
        certain personally identifiable information that can be used to contact
        or identify you. This includes but is not limited to:
      </p>
      <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
        <li>Your name</li>
        <li>Email address</li>
        <li>Mobile phone numbers</li>
        <li>Professional title</li>
        <li>Specialty</li>
        <li>Work address</li>
        <li>Username and password</li>
      </ul>

      <h2 style={{ color: "#004080", marginTop: "30px" }}>Sharing Data with Third Parties</h2>
      <p>
        We minimize the distribution of personal data and only share it with
        third parties when:
      </p>
      <ul style={{ paddingLeft: "20px", listStyleType: "circle" }}>
        <li>It is necessary to execute the agreement or comply with legal obligations.</li>
        <li>You explicitly request it.</li>
        <li>You register for conferences or events organized by third parties.</li>
      </ul>

      <h2 style={{ color: "#004080", marginTop: "30px" }}>Your Rights</h2>
      <p>
        You have the right to view, correct, or delete your personal data. You
        may also withdraw consent for data processing or object to how we
        process your data. Additionally, you can request data transferability,
        allowing us to send your personal data in a computer file to you or
        another organization upon your request.
      </p>

      <h2 style={{ color: "#004080", marginTop: "30px" }}>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page, and you are encouraged to review it
        periodically.
      </p>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "0.95em",
          color: "#555",
        }}
      >
        <p>
          For questions or concerns, contact us at{" "}
          <a
            href="mailto:info@medcon.com"
            style={{ color: "#0066cc", textDecoration: "none", fontWeight: "bold" }}
          >
            info@medcon.com
          </a>
          .
        </p>
      </div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
