require('dotenv').config();
const express = require('express');
const axios = require('axios');
const CryptoJS = require('crypto-js');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');
const http = require('http');
const { URLSearchParams } = require('url');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
const { 
    HS_MERCHANT_ID, 
    HS_STORE_ID, 
    HS_MERCHANT_HASH, 
    HS_MERCHANT_USERNAME, 
    HS_MERCHANT_PASSWORD, 
    API_URL, 
    RETURN_URL, 
    KEY1, 
    KEY2 
} = process.env;

// Encryption function

function encryptRequest(data) {
    const key1 = KEY1;
    const key2 = KEY2;

    if (!key1 || !key2) {
        throw new Error("Encryption keys are missing");
    }

    // Create string exactly as per sample format
    const mapString = Object.entries(data)
        .filter(([key]) => key !== 'HS_RequestHash') // Exclude RequestHash from encryption
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    console.log("\n=== Request String Before Encryption ===");
    console.log(mapString);

    // Encrypt using AES/CBC/PKCS7Padding
    const encrypted = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(mapString),
        CryptoJS.enc.Utf8.parse(key1),
        {
            iv: CryptoJS.enc.Utf8.parse(key2),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );

    return encrypted.toString();
}


// **1. Initiate Handshake API**
app.post('/api/initiate-handshake', async (req, res) => {
    try {
        // Generate a unique transaction reference number
        const txnRef = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;

        const handshakeData = {
            HS_RequestHash: "", // Will be set after encryption
            HS_IsRedirectionRequest: "0",
            HS_ChannelId: "1001",
            HS_MerchantId: HS_MERCHANT_ID,
            HS_StoreId: HS_STORE_ID,
            HS_ReturnURL: RETURN_URL,
            HS_MerchantHash: HS_MERCHANT_HASH,
            HS_MerchantUsername: HS_MERCHANT_USERNAME,
            HS_MerchantPassword: HS_MERCHANT_PASSWORD,
            HS_TransactionReferenceNumber: txnRef,
            HS_RequestType: "HANDSHAKE",
            HS_Currency: "PKR",
            HS_Version: "1.0"
        };

        // Calculate hash for handshake
        handshakeData.HS_RequestHash = encryptRequest(handshakeData);

        console.log('\n=== Handshake Request ===');
        console.log(JSON.stringify(handshakeData, null, 2));

        const response = await axios.post(`${API_URL}/HS/HS/HS`, handshakeData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        console.log('\n=== Handshake Response ===');
        console.log(JSON.stringify(response.data, null, 2));

        const responseData = typeof response.data === 'string' 
            ? JSON.parse(response.data) 
            : response.data;

        if (responseData.success === "false" || !responseData.AuthToken) {
            throw new Error(responseData.ErrorMessage || 'Handshake failed');
        }

        res.json({
            success: responseData.success,
            AuthToken: responseData.AuthToken,
            TransactionReferenceNumber: txnRef
        });

    } catch (error) {
        console.error('\n=== Handshake Error ===');
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response:', error.response.data);
        }
        res.status(500).json({ 
            success: "false",
            error: error.message,
            details: error.response?.data
        });
    }
});

// **2. Initiate Transaction Request**
app.post('/api/initiate-transaction', async (req, res) => {
    try {
        const { 
            transactionAmount, 
            transactionType, 
            orderID, 
            authToken,
            accountNumber,
            emailAddress,
            mobileNumber 
        } = req.body;

        // For credit/debit card payments (transactionType === "3"), use different request format
console.log('Received transactionType:', transactionType, 'Type:', typeof transactionType);
        
        if (transactionType === "3") {
            const redirectRequestData = {
                HS_RequestHash: "",
                HS_IsRedirectionRequest: "1", // Set to 1 for same-page handling
                HS_ChannelId: "1001",
                HS_ReturnURL: RETURN_URL,
                HS_MerchantId: HS_MERCHANT_ID,
                HS_StoreId: HS_STORE_ID,
                HS_MerchantHash: HS_MERCHANT_HASH,
                HS_MerchantUsername: HS_MERCHANT_USERNAME,
                HS_MerchantPassword: HS_MERCHANT_PASSWORD,
                HS_TransactionReferenceNumber: orderID
            };

            // Calculate hash for redirection request
            redirectRequestData.HS_RequestHash = encryptRequest(redirectRequestData);

            console.log('\n=== Card Payment Redirect Request ===');
            // console.log(JSON.stringify(redirectRequestData, null, 2));

            // For card payments, return the data to be posted to the APG checkout page
            console.log("res.json>>>>>>>>>>>>>>>>",res.json);
            
           try {
    return res.json({
        success: true,
        redirectData: redirectRequestData,
        redirectUrl: 'https://payments.bankalfalah.com/HS/HS/HS'
    });
} catch (err) {
    console.error("Error sending response:", err);
}

                 

        }
        

        // For non-card payments, continue with existing logic
        const requestData = {
            HS_ChannelId: "1001",
            HS_MerchantId: HS_MERCHANT_ID,
            HS_StoreId: HS_STORE_ID,
            HS_MerchantHash: HS_MERCHANT_HASH,
            HS_MerchantUsername: HS_MERCHANT_USERNAME,
            HS_MerchantPassword: HS_MERCHANT_PASSWORD,
            HS_ReturnURL: RETURN_URL,
            HS_Currency: "PKR",
            HS_AuthToken: authToken || "",
            HS_TransactionTypeId: transactionType,
            HS_TransactionReferenceNumber: orderID,
            HS_TransactionAmount: transactionAmount,
            HS_AccountNumber: accountNumber || "01000320237332",
            HS_Country: "164",
            HS_EmailAddress: emailAddress || "test@test.com",
            HS_MobileNumber: mobileNumber || "034512345678",
            HS_IsBIN: "0",
            HS_IsOTP: "1",
            HS_IsQR: "0",
            HS_MobileNo: mobileNumber || "034512345678",
            HS_OTPREF: orderID,
            HS_RequestHash: ""  // Will be set after encryption
        };

        // Log pre-encryption data
        console.log('\n=== Pre-encryption Data ===');
        const preEncryptionString = Object.entries(requestData)
            .filter(([key]) => key !== 'HS_RequestHash')
            .sort(([a], [b]) => a.localeCompare(b))  // Sort keys alphabetically
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        console.log(preEncryptionString);

        // Ensure correct hashing
        requestData.HS_RequestHash = encryptRequest(requestData);

        console.log('\n=== Final Request Data ===');
        console.log(JSON.stringify(requestData, null, 2));

        // Send API request
        const response = await axios.post(`https://payments.bankalfalah.com/HS/HS/HS`, requestData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const responseData = typeof response.data === 'string' 
            ? JSON.parse(response.data) 
            : response.data;

        console.log('\n=== Bank Response for OTP ===');
        console.log(JSON.stringify(responseData, null, 2));

        res.json(responseData);

    } catch (error) {
        console.error('\n=== Transaction Error ===');
        console.error('Error:', error.message);
        if (error.response?.data) {
            console.error('Response Data:', error.response.data);
        }
        
        let errorResponse = {
            error: "Transaction Initiation Failed",
            message: error.message,
            details: error.response?.data
        };

        res.status(500).json(errorResponse);
    }
});

// **3. Process Transaction Request with SSO**
app.post('/api/process-transaction', async (req, res) => {
    try {
        const { authToken, transactionRef, amount } = req.body;

        // Format data according to Bank Alfalah's page redirection requirements
        const redirectData = {
            HS_RequestHash: "",
            HS_IsRedirectionRequest: "1",
            HS_ChannelId: "1001",
            HS_ReturnURL: "https://www.discordsolutions.com/",
            HS_MerchantId: HS_MERCHANT_ID,
            HS_StoreId: HS_STORE_ID,
            HS_MerchantHash: HS_MERCHANT_HASH,
            HS_MerchantUsername: HS_MERCHANT_USERNAME,
            HS_MerchantPassword: HS_MERCHANT_PASSWORD,
            HS_TransactionReferenceNumber: transactionRef,
            HS_TransactionAmount: amount,
            HS_CustomerEmailAddress: req.body.email || "",
            HS_CustomerMobileNumber: req.body.phone || "",
            HS_CustomerCardNumber: "",
            HS_CustomerCardExpiryDate: "",
            HS_CustomerCardCVC: "",
            HS_TransactionTypeId: "3"  // For card payments
        };

        // Calculate hash
        redirectData.HS_RequestHash = encryptRequest(redirectData);

        console.log('\n=== Redirect Request Data ===');
        console.log(JSON.stringify(redirectData, null, 2));

        res.json({
            success: true,
            ssoData: redirectData,
            ssoUrl: 'https://payments.bankalfalah.com/HS/HS/HS'
        });

    } catch (error) {
        console.error('\n=== Redirect Process Error ===');
        console.error('Error:', error.message);
        if (error.response?.data) {
            console.error('Response Data:', error.response.data);
        }
        res.status(500).json({ 
            error: "Redirect Process Failed",
            message: error.message,
            details: error.response?.data
        });
    }
});

// **4. IPN Listener (Webhook)**
app.post('/api/ipn-listener', async (req, res) => {
    console.log("IPN received:", req.body);
    res.status(200).send("Received IPN");
});

// Add this new endpoint before your other routes
app.get('/payment-redirect', (req, res) => {
    const queryParams = new URLSearchParams(req.query).toString();
    res.redirect(`http://localhost:3000/payment-callback?${queryParams}`);
});

// Start Servercc
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
