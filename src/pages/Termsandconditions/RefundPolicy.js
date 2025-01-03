// RefundPolicy.js
import React from 'react';

const RefundPolicy = () => {
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
      <h1 style={headerStyle}>Refund Policy</h1>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>1. Refund Eligibility</h2>
        <p>
          Refunds can be requested within <strong>7 days</strong> of project completion. Requests made after this period will not be eligible for a refund.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>2. Partial Refunds</h2>
        <p>
          For projects that are partially completed, refunds will be issued proportionally based on the work delivered.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>3. Non-Refundable Services</h2>
        <p>
          Services such as consultations and assessments that have been fully provided are non-refundable.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>4. Dispute Resolution</h2>
        <p>
          Any disputes regarding refunds must be raised within <strong>3 days</strong> of receiving the service.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>5. Processing Time</h2>
        <p>
          Approved refunds will be processed within <strong>10 business days</strong>. Delays may occur due to banking processes.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>6. Payment Method for Refunds</h2>
        <p>
          Refunds will be issued to the original payment method used during the transaction.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>7. Refund for Subscriptions</h2>
        <p>
          Subscription services are non-refundable once the billing cycle has started.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>8. Cancellation Policy</h2>
        <p>
          Clients can cancel services at any time. However, hours worked before cancellation will still be billed.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>9. Refund for Technical Issues</h2>
        <p>
          If technical issues prevent service delivery, a full refund may be issued upon review.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>10. Chargebacks</h2>
        <p>
          Any chargebacks will result in immediate suspension of services until the issue is resolved.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>11. Refund for Prepaid Hours</h2>
        <p>
          Prepaid hours that have not been utilized can be refunded upon request.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>12. Special Promotions</h2>
        <p>
          Refunds are not applicable to services purchased under special promotions or discounts.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>13. Third-Party Services</h2>
        <p>
          We are not responsible for refunds related to third-party services used during the project.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>14. Client Responsibility</h2>
        <p>
          Clients are responsible for providing clear and accurate project requirements to avoid issues that may lead to refund requests.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>15. Amendments to Policy</h2>
        <p>
          We reserve the right to amend this refund policy at any time. Changes will be posted on our website.
        </p>
      </section>

      <footer style={footerStyle}>
        <p>
          For more information on our Refund Policy, please contact us at <strong>support@discordsolutions.com</strong>.
        </p>
      </footer>
    </div>
  );
};

export default RefundPolicy;