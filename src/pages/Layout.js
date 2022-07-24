import PropTypes from 'prop-types';

import { useLocation, useNavigate } from 'react-router-dom';

import logo from 'assets/demos-logo.png';
import personWithPhone1 from 'assets/person-with-phone-1.png';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-container">
      <div className="content-container">
        
        {pathname !== '/' && (
          <button onClick={handleBack} className="back-button">
            <span className="material-icons-round back-button__icon">
              arrow_back
            </span>
          </button>
        )}

        <img className="logo" src={logo} alt="logo"></img>

        {children}

      </div>
      
      <div className="person-with-phone-wrapper">
        <img
          className="person-with-phone"
          src={personWithPhone1}
          alt="person-with-phone"
        ></img>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
