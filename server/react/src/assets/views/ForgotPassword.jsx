import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import envelopeIcon from '../images/icons/envelope-solid.svg';

const forgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Handle Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // Form Handle
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/forgotPassword', {email});
      const { token } = response.data;

      // Handle successful forgotPassword
      console.log('forgotPassword successful! Token:', token);
    } catch (error) {
      // Handle forgotPassword error
      setError('Invalid email or password');
      console.log('forgotPassword error:', error);
    }
  }

  return (
    <>
        <div id="bgOverlayTrans" className="yot-overlay-bg-trans yot-z-index-3"></div>
        {/* <!-- Log In --> */}
        <div className="yot-overlay-mid-container yot-z-index-4">
          <div className="yot-overlay-mid-child yot-bg-white yot-pa-16 form-width-m-400">
              {/* <!-- Title --> */}
              <div className="yot-mb-8 yot-text-center">
                <h3 className="yot-tc-blue1">Forgot Password</h3>
                {/* <!-- Error Email--> */}
                <div className="error yot-mtb-8">
                  {error && <div className="error-message">{error}</div>}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* <!-- Email error --> */}
                <div>
                    <label htmlFor="email"><b>Email</b></label>
                </div>
                {/* <!-- Email --> */}
                <div className="yot-form-group yot-form-group-container">
                    <input
                      className={`yot-form-input`}
                      type="email"
                      style={{paddingLeft: '38px'}}
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <img className="yot-form-group-icon-left" src={envelopeIcon} alt="" width="36px" />
                </div>

                {/* <!-- Nav Form -->    */}
                <div className="yot-mb-4 yot-flex yot-flex-ai-c-jc-sb">
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/">Log In</Link>
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/signup">Sign Up</Link>
                </div>

                {/* <!-- Submit --> */}
                <div className="yot-text-center">
                    <button className="yot-btn-blue1">Submit</button>
                </div>
              </form>
          </div>
        </div>
    </>
  )
}

export default forgotPassword