import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentAlflah.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        amount: "",
        accountNumber: "",
        email: "",
        phone: "",
        smsOTP: "",
        transactionType: ""
    });
    const [authToken, setAuthToken] = useState(null);
    const [transactionRef, setTransactionRef] = useState(null);
    const [orderID, setOrderID] = useState(null);
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleError = (error) => {
        let errorMessage = 'An unexpected error occurred';
        
        if (error.response?.data) {
            const { error: errorTitle, message, details } = error.response.data;
            errorMessage = `${errorTitle}: ${message}${details ? `\nDetails: ${details}` : ''}`;
        } else if (error.message) {
            errorMessage = error.message;
        }

        toast.error(errorMessage, {
            position: "top-right",
            autoClose: 8000, // Increased duration for longer messages
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                maxWidth: '500px',
                whiteSpace: 'pre-line' // Allow line breaks in message
            }
        });
    };

    const initiateHandshake = async () => {
        try {
            setLoading(true);
            const loadingToastId = toast.loading("Initializing payment gateway...");
            const orderID = `ORD${Date.now()}`;
            console.log("orderID>>>>>>>>>>>>===========>", orderID);
            setOrderID(orderID);
            const response = await axios.post("http://localhost:8080/api/initiate-handshake", {
                orderID
            });

            toast.dismiss(loadingToastId);
 const responseData = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

console.log('=== Handshake Response ===');
console.log('Full Response?>>>>>>>>>>>>>:', responseData);
console.log('Success Status>>>>>>>>>>:', responseData.success);
console.log('Auth Token:>>>>>>>>>>>>>>>>>>.', responseData.AuthToken);

         

            if (responseData.AuthToken && (responseData.success === true || responseData.success === "true")) {
                setAuthToken(responseData.AuthToken);
                setTransactionRef(orderID);
                setStep(2);
                toast.success("Payment gateway initialized successfully!");
            } else {
                throw new Error(response.data.ErrorMessage || "Handshake Unsuccessful");
            }
        } catch (error) {
            console.error("Error:", error);
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const initiateTransaction = async (e) => {
        let loadingToastId;
        e.preventDefault();
        try {
            setLoading(true);
            loadingToastId = toast.loading("Processing transaction...");

            // Validate required fields
            if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0) {
                throw new Error('Please enter a valid amount');
            }

            if (!formData.transactionType) {
                throw new Error('Please select a transaction type');
            }

            const requestData = {
                transactionAmount: formData.amount.toString(),
                transactionType: formData.transactionType,
                orderID: orderID,
                authToken: authToken || "",
                accountNumber: formData.accountNumber || "987654321987100",
                emailAddress: formData.email || "",
                mobileNumber: formData.phone?.replace(/[^0-9]/g, '')
            };

            const response = await axios.post("http://localhost:8080/api/initiate-transaction", requestData);
            
            toast.dismiss(loadingToastId);
            
            const responseData = response.data;
            console.log("Full Response Data:", responseData);

            // Special handling for credit card payments (type "3")
            if (formData.transactionType === "3") {
                if (responseData.success === true && responseData.redirectData) {
                    // Create and submit form for credit card redirect
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = responseData.redirectUrl;
                    form.target = '_self';
                    
                    // Add all redirect data as hidden fields
                    Object.entries(responseData.redirectData).forEach(([key, value]) => {
                        if (value !== undefined && value !== null) {
                            const input = document.createElement('input');
                            input.type = 'hidden';
                            input.name = key;
                            input.value = value.toString();
                            form.appendChild(input);
                        }
                    });

                    document.body.appendChild(form);
                    form.submit();
                    return;
                } else {
                    throw new Error("Invalid credit card redirect response");
                }
            }

            // Handle other payment methods as before
            if (responseData.success === "true") {
                console.log("Transaction successful, checking for OTP...");
                if (responseData.IsOTP === "true" || responseData.OTP === "true") {  // Check both possible OTP indicators
                    console.log("OTP is required, moving to OTP step");
                    setTransactionRef(responseData.TransactionReferenceNumber);
                    setStep(3);
                    toast.success("Transaction initiated successfully! Please check your phone for OTP.");
                } else if (responseData.AuthToken) {
                    console.log("No OTP required, but have AuthToken");
                    setTransactionRef(responseData.TransactionReferenceNumber || orderID);
                    setStep(3);
                    toast.success("Transaction initiated successfully!");
                } else {
                    console.log("Neither OTP nor AuthToken found in response");
                    throw new Error("Invalid response format");
                }
            } else {
                console.log("Transaction was not successful");
                throw new Error(responseData.ErrorMessage || "Transaction failed");
            }

        } catch (error) {
            if (loadingToastId) {
                toast.dismiss(loadingToastId);
            }
            console.error('Transaction Error:', error);
            
            const errorMessage = error.response?.data?.message || 
                               error.response?.data?.ErrorMessage || 
                               error.message || 
                               "Failed to process transaction";
                               
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 5000
            });
        } finally {
            setLoading(false);
        }
    };

    const processTransaction = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:8080/api/process-transaction", {
                authToken,
                transactionRef,
                amount: formData.amount,
                email: formData.email,
                phone: formData.phone
            });

            if (response.data.success && response.data.ssoData) {
                // Create a form and submit it programmatically
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = response.data.ssoUrl;
                form.target = '_self'; // Changed to same window
                
                // Add all SSO data as hidden fields
                Object.entries(response.data.ssoData).forEach(([key, value]) => {
                    if (value !== undefined && value !== null) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = value.toString();
                        form.appendChild(input);
                    }
                });

                // Append form to body and submit
                document.body.appendChild(form);
                form.submit();

            } else {
                throw new Error("Invalid redirect response");
            }
        } catch (error) {
            console.error("Error processing payment redirect:", error);
            handleError(error);
            setLoading(false);
        }
    };

    // Add useEffect to handle return URL parameters
    useEffect(() => {
        const handlePaymentReturn = () => {
            try {
                // Check for navigation state first
                const navigationState = window.history.state?.usr;
                if (navigationState?.isCallback) {
                    const success = navigationState.success;
                    const authToken = navigationState.authToken;

                    if (success === 'true') {
                        setStep(4);
                        toast.success("Payment completed successfully!");
                    } else {
                        toast.error("Payment was not successful. Please try again.");
                        setStep(2);
                    }
                    
                    // Clean up the navigation state
                    window.history.replaceState(
                        {}, 
                        document.title, 
                        window.location.pathname
                    );
                    return;
                }

                // Fallback to URL parameters if no navigation state
                const urlParams = new URLSearchParams(window.location.search);
                const success = urlParams.get('success');
                const authToken = urlParams.get('AuthToken');

                if (success || authToken) {
                    if (success === 'true') {
                        setStep(4);
                        toast.success("Payment completed successfully!");
                    } else {
                        toast.error("Payment was not successful. Please try again.");
                        setStep(2);
                    }

                    // Clean up the URL
                    const cleanUrl = window.location.pathname;
                    window.history.replaceState({}, document.title, cleanUrl);
                }
            } catch (error) {
                console.error('Error handling payment return:', error);
                toast.error("Error processing payment response");
            }
        };

        handlePaymentReturn();
    }, []);

    return (
        <div className="payment-container">
            <ToastContainer />
            <div className="payment-card">
                <div className="payment-header">
                    <h2>Alfa Payment Gateway</h2>
                    <div className="steps-indicator">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className={`step ${step >= item ? 'active' : ''}`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {step === 1 && (
                    <div className="payment-section">
                        <h3>Initialize Payment</h3>
                        <p>Click below to start your payment process</p>
                        <button 
                            className="primary-button"
                            onClick={initiateHandshake}
                            disabled={loading}
                        >
                            {loading ? "Initializing..." : "Start Payment"}
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <form onSubmit={initiateTransaction} className="payment-form">
                        <div className="form-group">
                            <label>Amount (PKR)</label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Transaction Type</label>
                            <select
                                name="transactionType"
                                value={formData.transactionType}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Transaction Type</option>
                                <option value="1">Alfa Wallet</option>
                                <option value="2">Alfalah Bank Account</option>
                                <option value="3">Credit/Debit Card</option>
                            </select>
                        </div>
                        
                        {formData.transactionType === "2" && (
                            <div className="form-group">
                                <label>Account Number</label>
                                <input
                                    type="text"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        )}
                        
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="03XXXXXXXXX"
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="primary-button"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Continue"}
                        </button>
                    </form>
                )}

                {step === 3 && (
                    <form onSubmit={processTransaction} className="payment-form">
                        <div className="payment-section">
                            <h3>Redirecting to Payment Gateway</h3>
                            <p>Please wait while we redirect you to the secure payment gateway...</p>
                            <button 
                                type="submit" 
                                className="primary-button"
                                disabled={loading}
                            >
                                {loading ? "Redirecting..." : "Proceed to Payment"}
                            </button>
                        </div>
                    </form>
                )}

                {step === 4 && (
                    <div className="payment-success">
                        <div className="success-icon">✓</div>
                        <h3>Payment Successful!</h3>
                        <p>Transaction Reference: {transactionRef}</p>
                        <p>Your payment has been processed successfully.</p>
                        <button 
                            className="primary-button"
                            onClick={() => window.location.reload()}
                        >
                            Make Another Payment
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Payment;
