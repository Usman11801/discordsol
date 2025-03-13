import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.8',
    background: 'linear-gradient(to right, #ffecd2, #fcb69f)',
    color: '#333',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    margin: '20px auto',
    maxWidth: '900px',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#2c3e50',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    fontSize: '2.5rem',
    marginBottom: '20px',
  };

  const sectionStyle = {
    marginBottom: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  };

  const sectionTitleStyle = {
    color: '#2980b9',
    fontSize: '1.6rem',
  };

  const footerStyle = {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Privacy Policy</h1>
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Introduction</h2>
        <p>
          At <strong>Discord Solutions</strong>, your privacy is of utmost importance to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. Information We Collect</h2>
        <p>
          We collect information that you provide to us directly, such as when you register on our site, subscribe to our services, or contact us.
        </p>
        <ul>
          <li>Personal Information: Name, email address, phone number.</li>
          <li>Payment Information: Billing address, credit/debit card details.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. How We Use Your Information</h2>
        <p>
          The information collected is used to provide and improve our services, process transactions, and communicate with you.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share information with trusted partners to help operate our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Data Security</h2>
        <p>
          We implement security measures to maintain the safety of your personal information.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Cookies Policy</h2>
        <p>
          We use cookies to enhance your experience on our site. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Changes to This Policy</h2>
        <p>
          We reserve the right to update this policy at any time. We will notify you of any significant changes.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>9. Contact Information</h2>
        <p>
          If you have questions about our privacy practices, please contact us at <strong>support@discordsolutions.comm</strong>.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>10. Data Retention</h2>
        <p>
          We retain your personal data only as long as necessary for the purposes outlined in this policy.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>11. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>12. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>13. International Users</h2>
        <p>
          If you are accessing our services from outside the United States, please note that your data may be transferred to, stored, and processed in the United States.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>14. Consent</h2>
        <p>
          By using our website, you consent to our privacy policy.
        </p>
      </section>

      <footer style={footerStyle}>
        <p>
          Questions about our Privacy Policy? Contact us at <strong>support@discordsolutions.comm</strong>.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
