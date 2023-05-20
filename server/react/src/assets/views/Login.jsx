import React, { useState } from 'react';

import envelopeIcon from '../images/icons/envelope-solid.svg';
import eyeSlashIcon from '../images/icons/eye-slash-solid.svg';
import eyeIcon from '../images/icons/eye-solid.svg';
import lockIcon from '../images/icons/lock-solid.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
  const handleSubmit = (e) => {
    e.preventDefault();

    // if(password.length >= 8 && passwordConfirm.length >= 8 && password == passwordConfirm && isValidEmail){
      
    //   return;
    // }
    // perform Login logic here
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
              </div>

              <form onSubmit={handleSubmit}>
                {/* <!-- Email error --> */}
                <div className="yot-flex yot-flex-ai-c-jc-sb">
                    <label htmlFor="email"><b>Email</b></label>
                    {/* <!-- Error Email--> */}
                    <div className="yot-text-end">
                        <span className="yot-tc-red">Email Doesn&apos;t Exist</span>
                    </div>
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
                <div className="yot-flex yot-flex-ai-c-jc-sb">
                    <label htmlFor="password"><b>Password</b></label>
                    <div className="yot-flex yot-flex-fd-c yot-text-end">
                        <span className="yot-tc-red">
                          Incorrect Password
                        </span>
                    </div>
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
                    <span className="yot-cursor-pointer yot-active-hb-blue1">Forgot Password</span>
                    <span className="yot-cursor-pointer yot-active-hb-blue1">Sign Up</span>
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