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
          Welcome to <strong>Discord Solutions</strong>. By accessing or using our services, you agree to adhere to the following Terms
          and Conditions. If you disagree with any part of these terms, please refrain from using our services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. Hourly Services</h2>
        <p>
          Our offerings include software development, consultation, and technical support on an hourly basis. All billed
          hours are tracked and communicated transparently.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Payment Terms</h2>
        <p>
          Payments are due within <strong>7 days</strong> of receiving an invoice. Late payments may lead to suspension or
          termination of services.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Refund Policy</h2>
        <p>
          Refunds can be requested within <strong>7 days</strong> of work completion if the outcome is unsatisfactory. Refunds are
          subject to internal review.
        </p>
        <ul>
          <li>Approved hours are non-refundable.</li>
          <li>Partially completed projects will be billed proportionally.</li>
          <li>Disputes must be raised within <strong>3 days</strong> of delivery.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Cancellation Policy</h2>
        <p>
          Services can be canceled at any time with written notice. Hours worked prior to cancellation will still be billed.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Confidentiality</h2>
        <p>
          Both parties agree to keep all shared data and project information strictly confidential unless otherwise agreed in writing.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Liability</h2>
        <p>
          Our liability is limited to the total amount paid for the disputed work. We will not be responsible for indirect or
          incidental damages.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Updates to Terms</h2>
        <p>
          We reserve the right to update these terms as necessary. Updates will take effect immediately upon posting on this page.
        </p>
      </section>

      <footer style={footerStyle}>
        <p>
          Have questions about our Terms? Reach out to us at <strong>support@discordsolutions.com</strong>.<br />
          Thank you for choosing <em>Discord Solutions</em>!
        </p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;