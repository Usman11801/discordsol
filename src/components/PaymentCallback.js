import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallback = () => {
            try {
                // Get the URL parameters
                const urlParams = new URLSearchParams(window.location.search);
                
                // Get all relevant parameters
                const params = {
                    success: urlParams.get('success'),
                    authToken: urlParams.get('AuthToken'),
                    responseCode: urlParams.get('ResponseCode'),
                    responseMessage: urlParams.get('ResponseMessage'),
                    transactionReferenceNumber: urlParams.get('TransactionReferenceNumber')
                };

                console.log('Payment callback parameters:', params);

                // Navigate to payment page with parameters
                navigate('/paymentgateway', { 
                    state: { 
                        ...params,
                        isCallback: true
                    },
                    replace: true
                });
            } catch (error) {
                console.error('Callback handling error:', error);
                navigate('/paymentgateway', { 
                    state: { 
                        success: false,
                        error: 'Payment processing error'
                    },
                    replace: true
                });
            }
        };

        handleCallback();
    }, [navigate]);

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            padding: '20px',
            textAlign: 'center'
        }}>
            <h2>Processing Payment Response</h2>
            <p>Please wait while we verify your payment...</p>
        </div>
    );
};

export default PaymentCallback; 