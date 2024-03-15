import React from 'react';
import { Button } from 'reactstrap';

/* eslint-disable */
function Result(props) {
  const { handleStep } = props;

  const nextStep = (value) => {
    window.sessionStorage.removeItem('one');
    window.sessionStorage.removeItem('two');
    window.sessionStorage.removeItem('three');
    window.sessionStorage.removeItem('four');
    window.sessionStorage.removeItem('result');

    const data = {
      result: true,
    };
    window.sessionStorage.setItem('result', JSON.stringify(data));
    handleStep(value);
  };

  return (
    <div
      className="d-flex flex-column justify-content-between h-100"
      style={{ width: '65%' }}
    >
      <div>
        <h2 style={{ marginTop: 40 }} className="welcome-text">
          Result
        </h2>
        <h5 style={{ fontSize: 'medium' }} className="description-text">
          OUR RECOMMENDATION
        </h5>
        <br />
        <div style={{ fontSize: 13 }}>
          <p>
            Based on your inputs, it is recommended to schedule the heater to
            run between 11am to 3pm hours
          </p>
          <br />
          <p>
            If you have a PV system with capacity greater than SkW, it may be
            beneficial to move your water heater from controlled load to
            standard load so that energy from PV can be utilized. If you still
            want to keep the heater on controlled load, try running the heater
            on "MANUAL mode at a set temperature of 55 degree C. Based on the
            extend of usage, you may even try for 50 degree C as this would
            increase the savings.
          </p>
        </div>
      </div>
      <div>
        <Button outline onClick={() => nextStep(1)} className="back-button">
          Start again
        </Button>
      </div>
    </div>
  );
}

export default Result;
