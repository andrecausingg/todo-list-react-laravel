import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import envelopeIcon from '../images/icons/envelope-solid.svg';
import eyeSlashIcon from '../images/icons/eye-slash-solid.svg';
import eyeIcon from '../images/icons/eye-solid.svg';
import lockIcon from '../images/icons/lock-solid.svg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  // Handle Email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  }
  const validateEmail = (email) => {
    // regular expression to check if the email is valid
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  // Handle Password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  // Handle Confirm Password
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  }
  // Display Password Icon
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  // Display Confirm Password Icon
  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  }
  // Form Handle
  const handleSubmit = (e) => {
    e.preventDefault();

    if(password.length >= 8 && password !== "" && passwordConfirm.length >= 8 && passwordConfirm !== "" && password == passwordConfirm && isValidEmail){
      
      return;
    }
    // perform signup logic here
  }

  return (
    <>
        <div id="bgOverlayTrans" className="yot-overlay-bg-trans yot-z-index-3"></div>
        {/* <!-- Log In --> */}
        <div className="yot-overlay-mid-container yot-z-index-4">
          <div className="yot-overlay-mid-child yot-bg-white yot-pa-16 form-width-m-400">
              {/* <!-- Title --> */}
              <div className="yot-mb-8 yot-text-center">
                <h3 className="yot-tc-blue1">Sign Up</h3>
                {password !== "" &&  passwordConfirm !== "" && password != passwordConfirm && (
                  <span className="yot-tc-red yot-mtb-8">Password and Confirm Password not Match</span>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                {/* <!-- Email error --> */}
                <div className="yot-flex yot-flex-ai-c-jc-sb">
                    <label htmlFor="email"><b>Email</b></label>
                    {/* <!-- Error Email--> */}
                    <div className="yot-text-end">
                      {email !== ""  &&  !isValidEmail && (
                        <span className="yot-tc-red">Please enter a valid email address</span>
                      )}
                    </div>
                </div>
                {/* <!-- Email --> */}
                <div className="yot-form-group yot-form-group-container">
                    <input
                      className={`yot-form-input 
                        ${email !== "" && isValidEmail === true ? 'yot-form-input-good' : ''}  
                        ${email !== "" && isValidEmail === false ? 'yot-form-input-bad' : ''}`
                      }
                      type="email"
                      style={{paddingLeft: '38px'}}
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <img className="yot-form-group-icon-left" src={envelopeIcon} alt="" width="36px" />
                </div>

                {/* <!-- Password Label --> */}
                <div className="yot-flex yot-flex-ai-c-jc-sb">
                    <label htmlFor="password"><b>Password</b></label>
                    <div className="yot-flex yot-flex-fd-c yot-text-end">
                      {password !== "" && password.length < 8 && (
                        <span className="yot-tc-red" style={{fontSize: '14px' }}>
                          The <b>PASSWORD</b> must be at least 8 characters long.
                        </span>
                      )}
                    </div>
                </div>
                {/* <!-- Password --> */}
                <div className="yot-form-group yot-form-group-container">
                  <input
                    className={`yot-form-input 
                      ${password !== "" && password.length >= 8 ? 'yot-form-input-good' : ''} 
                      ${password !== "" && password.length < 8 ? 'yot-form-input-bad' : ''} 
                      ${password !== "" && passwordConfirm !== "" && password !== passwordConfirm ? 'yot-form-input-bad' : ''}`
                    }
                    type={showPassword ? 'text' : 'password'}
                    style={{ padding: '14px 38px' }}
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <img className="yot-form-group-icon-left" src={lockIcon} alt="" width="36px" />

                  <img className="yot-form-group-icon-right yot-cursor-pointer" src={showPassword ? eyeIcon : eyeSlashIcon} alt="" width="36px" onClick={togglePasswordVisibility} />
                </div>

                {/* <!-- Confirm Password Label --> */}
                <div className="yot-flex yot-flex-ai-c-jc-sb">
                    <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
                    <div className="yot-flex yot-flex-fd-c yot-text-end">
                      {passwordConfirm !== "" && passwordConfirm.length < 8 && (
                        <span className="yot-tc-red" style={{fontSize: '14px' }}>
                          The <b>PASSWORD</b> must be at least 8 characters long.
                        </span>
                      )}
                    </div>
                </div>
                {/* <!-- Confirm Password --> */}
                <div className="yot-form-group yot-form-group-container">
                  <input
                    className={`yot-form-input 
                      ${passwordConfirm !== "" && passwordConfirm.length >= 8 ? 'yot-form-input-good' : ''} 
                      ${passwordConfirm !== "" && passwordConfirm.length < 8 ? 'yot-form-input-bad' : ''} 
                      ${password !== "" && passwordConfirm !== "" && password !== passwordConfirm ? 'yot-form-input-bad' : ''}`
                    }
                    type={showPasswordConfirm ? 'text' : 'password'}
                    style={{ padding: '14px 38px' }}
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                    required
                  />
                  <img className="yot-form-group-icon-left" src={lockIcon} alt="" width="36px" />

                  <img className="yot-form-group-icon-right yot-cursor-pointer" src={showPasswordConfirm ? eyeIcon : eyeSlashIcon} alt="" width="36px" onClick={togglePasswordConfirmVisibility} />
                </div>

                {/* <!-- Nav Form -->    */}
                <div className="yot-mb-4 yot-flex yot-flex-ai-c-jc-sb">
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/forgotPassword">Forgot Password</Link>
                    <Link className="yot-cursor-pointer yot-active-hb-blue1" to="/">Log In</Link>
                </div>

                {/* Terms and Condition */}
                <div className="yot-mb-16 yot-flex yot-flex-fd-c">
                    <span className="yot-text-fs-t yot-text-center">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</span>
                </div>

                {/* <!-- Submit --> */}
                <div className="yot-text-center">
                    <button className="yot-btn-blue1">Sign Up</button>
                </div>
              </form>
          </div>
        </div>
    </>
  )
}

export default Signup