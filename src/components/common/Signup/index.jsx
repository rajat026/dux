import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import insideImage from '../../../assets/images/Bhpd8.jpg';
import StartPage from './StartPage';
import StepOne from './StepOne';

function Signup() {
  const [step, setStep] = useState(0);

  const handleStep = (value) => {
    setStep(value);
  };

  return (
    <Row className="hero">
      <Col md="9" className="imageDiv">
        <Row className="insideDiv">
          <Col className="firstCol" md="4">
            <h2 className="siteText">THERMANN</h2>
            <img
              className="insideImage"
              src={insideImage}
              alt="Thermann Smart Electric Ui"
            />
          </Col>
          <Col className="secondCol" md="8">
            {step === 0 ? (
              <StartPage handleStep={handleStep} />
            ) : (
              <StepOne handleStep={handleStep} />
            )}

            <div className="stepper-div">
              <span
                className={`${step === 1 || step === 2 ? 'stepper-access' : 'stepper'}`}
              >
                1
              </span>
              <div
                className={`${step === 2 ? 'stepper-line-access' : 'stepper-line'}`}
              />
              <span className={`${step === 2 ? 'stepper-access' : 'stepper'}`}>
                2
              </span>
              <div className="stepper-line" />
              <span className="stepper">3</span>
              <div className="stepper-line" />
              <span className="stepper">4</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="nonImageDiv" md="3">
        <span className="logo">DUX LOGO</span>
      </Col>
    </Row>
  );
}

export default Signup;
