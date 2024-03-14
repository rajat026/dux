import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import bg from '../../../assets/images/thermann-bg.jpg';
import logo from '../../../assets/images/thermann-logo.png';
import insideImage from '../../../assets/images/thermann/lifestyle.jpg';
import electric from '../../../assets/images/thermann/electric.png';
import StartPage from './StartPage';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import Result from './result';
/* eslint-disable */

function Signup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('four')) !== null) {
      setStep(5);
    } else if (JSON.parse(window.sessionStorage.getItem('three')) !== null) {
      setStep(4);
    } else if (JSON.parse(window.sessionStorage.getItem('two')) !== null) {
      setStep(3);
    } else if (JSON.parse(window.sessionStorage.getItem('one')) !== null) {
      setStep(2);
    } else if (JSON.parse(window.sessionStorage.getItem('result')) !== null) {
      setStep(1);
    }
    //  else {
    //   setStep(0);
    // }
  }, []);

  const handleStep = (value) => {
    setStep(value);
  };

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="image-div d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="g-0">
        <Col className="signup-box mx-auto">
          <img height="4%" className="mb-4" alt="thermann" src={logo} />
          <Row className="g-0">
            <Col md="4">
              <div
                className="image-banner"
                style={{ backgroundImage: `url(${insideImage})` }}
              />
            </Col>
            <Col md="8" className="bg-white position-relative">
              <Row>
                <Col md="9">
                  <div className="p-5">
                    {step === 0 && <StartPage handleStep={handleStep} />}
                    {step === 1 && <StepOne handleStep={handleStep} />}
                    {step === 2 && <StepTwo handleStep={handleStep} />}
                    {step === 3 && <StepThree handleStep={handleStep} />}
                    {step === 4 && <StepFour handleStep={handleStep} />}
                    {step === 5 && <Result handleStep={handleStep} />}
                  </div>
                </Col>
                <Col md="3" className="electric">
                  <div className="image-electric">
                    <img alt="electric" src={electric} />
                  </div>
                </Col>
                {step !== 5 && (
                  <div className="stepper-div px-5">
                    <span
                      className={`${step === 1 || step === 2 || step === 3 || step === 4 ? 'stepper-access' : 'stepper'}`}
                    >
                      1
                    </span>
                    <div
                      className={`${step === 2 || step === 3 || step === 4 ? 'stepper-line-access' : 'stepper-line'}`}
                    />
                    <span
                      className={`${step === 2 || step === 3 || step === 4 ? 'stepper-access' : 'stepper'}`}
                    >
                      2
                    </span>
                    <div
                      className={`${step === 3 || step === 4 ? 'stepper-line-access' : 'stepper-line'}`}
                    />
                    <span
                      className={`${step === 3 || step === 4 ? 'stepper-access' : 'stepper'}`}
                    >
                      3
                    </span>
                    <div
                      className={`${step === 4 ? 'stepper-line-access' : 'stepper-line'}`}
                    />
                    <span
                      className={`${step === 4 ? 'stepper-access' : 'stepper'}`}
                    >
                      4
                    </span>
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default Signup;
