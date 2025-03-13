import React from 'react';

const TermsAndConditions = () => {
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
      <h1 style={headerStyle}>Terms and Conditions</h1>
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Introduction</h2>
        <p>
          Welcome to <strong>Discord Solutions</strong>. By accessing or using our services, you agree to adhere to the following Terms and Conditions.
          These terms govern your use of our website and services, including software development and consultation provided on an hourly basis.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. User Obligations</h2>
        <p>
          Users must ensure that all information provided is accurate and up-to-date. Any misuse of our services may result in termination.
        </p>
        <ul>
          <li>Provide accurate billing information.</li>
          <li>Comply with all applicable laws while using our services.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Payment Terms</h2>
        <p>
          Users agree to pay all applicable fees for services rendered. Late payments may result in additional charges or service suspension.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Service Availability</h2>
        <p>
          While we strive to ensure that our services are available at all times, we do not guarantee uninterrupted access due to maintenance or unforeseen issues.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Intellectual Property</h2>
        <p>
          All content, logos, and designs on our website are the property of <strong>Discord Solutions</strong> and may not be used without explicit permission.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Limitation of Liability</h2>
        <p>
          We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to our services at any time for any reason, including violation of these terms.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of [Your Country/State].
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>9. Dispute Resolution</h2>
        <p>
          Any disputes arising under these terms shall be resolved through binding arbitration in accordance with [Arbitration Rules].
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>10. Modifications to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of our services indicates acceptance of the updated terms.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>11. Privacy Policy</h2>
        <p>
          Your use of our services is also governed by our Privacy Policy, which can be found [here].
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>12. Third-Party Services</h2>
        <p>
          We may integrate third-party services. We are not responsible for the content or practices of these services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>13. User-Generated Content</h2>
        <p>
          Users are responsible for any content they post. We reserve the right to remove content that violates our policies.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>14. Force Majeure</h2>
        <p>
          We are not liable for delays or failure to perform due to causes beyond our reasonable control, such as natural disasters or government actions.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>15. No Waiver</h2>
        <p>
          Our failure to enforce any provision of these terms shall not be considered a waiver of our rights.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>16. Severability</h2>
        <p>
          If any provision of these terms is found to be unenforceable, the remaining provisions shall remain in full force and effect.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>17. Assignment</h2>
        <p>
          You may not assign your rights under these terms without our prior written consent.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>18. Entire Agreement</h2>
        <p>
          These terms constitute the entire agreement between you and <strong>Discord Solutions</strong> regarding your use of our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>19. Feedback</h2>
        <p>
          We welcome your feedback. By submitting feedback, you grant us the right to use it without restriction.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>20. Contact Us</h2>
        <p>
          If you have any questions regarding these terms, please contact us at <strong>support@discordsolutions.comm</strong>.
        </p>
      </section>

      <footer style={footerStyle}>
        <p>
          Have questions about our Terms? Reach out to us at <strong>support@discordsolutions.comm</strong>.<br />
          Thank you for choosing <em>Discord Solutions</em>!
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
