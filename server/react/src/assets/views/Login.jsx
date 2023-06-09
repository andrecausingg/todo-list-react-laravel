import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import envelopeIcon from '../images/icons/envelope-solid.svg';
import eyeSlashIcon from '../images/icons/eye-slash-solid.svg';
import eyeIcon from '../images/icons/eye-solid.svg';
import lockIcon from '../images/icons/lock-solid.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Handle Email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  // Handle Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  // Display Password Icon
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  // Form Handle
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
      const { token } = response.data;

      // Handle successful login
      console.log('Login successful! Token:', token);
    } catch (error) {
      // Handle login error
      setError('Invalid email or password');
      console.log('Login error:', error);
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
                <h3 className="yot-tc-blue1">Log In</h3>
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

                {/* <!-- Password Label --> */}
                <div>
                    <label htmlFor="password"><b>Password</b></label>
                </div>
                {/* <!-- Password --> */}
                <div className="yot-form-group yot-form-group-container">
                  <input
                    className={`yot-form-input`}
                    type={showPassword ? 'text' : 'password'}
                    style={{ padding: '14px 38px' }}
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                  <img className="yot-form-group-icon-left" src={lockIcon} alt="" width="36px" />

                  <img className="yot-form-group-icon-right yot-cursor-pointer" src={showPassword ? eyeIcon : eyeSlashIcon} alt="" width="36px" onClick={togglePasswordVisibility} />
                </div>

                {/* <!-- Nav Form -->    */}
                <div className="yot-mb-4 yot-flex yot-flex-ai-c-jc-sb">
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/forgotPassword">Forgot Password</Link>
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/signup">Sign Up</Link>
                </div>

                {/* <!-- Submit --> */}
                <div className="yot-text-center">
                    <button className="yot-btn-blue1">Log In</button>
                </div>
              </form>
          </div>
        </div>
    </>
  )
}

export default Login