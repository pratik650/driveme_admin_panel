import React from 'react';
import { CFooter } from '@coreui/react';
import { FaHeart, FaReact } from 'react-icons/fa'; // You'll need to install react-icons if not already

const AppFooter = () => {
  return (
    <CFooter className="footer-style">
      <div>
        Made with <FaHeart className="text-danger" /> by  
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer" className="footer-link">
           RAMO
        </a>
        <span className="ms-1">&copy; 2023</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <FaReact className="react-icon" />
        
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter);
