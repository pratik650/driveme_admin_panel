import React from 'react';
import '../../css/gateway.css'; // Make sure to create a CSS file with your styles

// Import images for payment gateways and barcode
import paypalImage from '../../assets/images/paypal.png'; // Add the actual path to your image files
import stripeImage from '../../assets/images/stripe.png';
import razorpayImage from '../../assets/images/razorpay.png';
import barcodeImage from '../../assets/images/barcode.jpg';
import googlepay from '../../assets/images/googlepay.png';
// ... import other payment method images

const paymentMethods = [
  { name: 'PayPal', status: 'Active', image: paypalImage },
  { name: 'Stripe', status: 'Active', image: stripeImage },
  { name: 'Razorpay', status: 'Active', image: razorpayImage },
  { name: 'Barcode', status: 'Active', image: barcodeImage },
  { name: 'GooglePay', status: 'Active', image: googlepay },
  // ... other payment methods
];

const AutomaticGateways = () => {
  const handleConfigure = (methodName) => {
    // Placeholder for configuration logic
    console.log(`Configure ${methodName}`);
  };

  const handleAddNew = () => {
    // Placeholder for add new logic
    console.log('Add new payment method');
  };

  return (
    <div className="automatic-gateways-container">
      <h2 style={{margin:40}}>Automatic Gateways</h2>
      <div className="payment-methods-grid">
        {paymentMethods.map((method, index) => (
          <div key={index} className="payment-method">
            <img src={method.image} alt={method.name} />
            <p>{method.name}</p>
            <p>{method.status}</p>
            <button onClick={() => handleConfigure(method.name)} style={{margin:40,backgroundColor:'blue',color:'white'}}>Config</button>
          </div>
        ))}
      </div>
      <div className="add-new-section">
        <button onClick={handleAddNew}>Add New</button>
      </div>
    </div>
  );
};

export default AutomaticGateways;
