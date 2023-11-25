import React from 'react';
import '../../css/gateway.css'; // Make sure to create a CSS file with your styles
import barcodeImage from '../../assets/images/barcode.jpg' // Adjust the path as needed

const ManualGateway = () => {
  return (
    <div className="manual-gateway-container">
      <h5 className="title">Manual Gateways Process</h5>
      <div className="image-container">
        <img src={ barcodeImage} alt="Barcode" className="barcode-image" />
      </div>
    </div>
  );
};

export default ManualGateway;
