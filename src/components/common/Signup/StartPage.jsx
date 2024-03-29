/* eslint-disable */

import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

function StartPage(props) {
  const [access, setAccess] = useState(false);
  const { handleStep } = props;

  const selectTerm = (event) => {
    if (event.target.checked) {
      setAccess(true);
    } else {
      setAccess(false);
    }
  };

  const start = (value) => {
    handleStep(value);
  };

  return (
    <div>
      <h2 style={{ marginTop: 40 }} className="welcome-text">
        WELCOME
      </h2>
      <h5 style={{ fontSize: 15 }} className="description-text">
        Lets configure your new Thermann Smart Electric water heater and
        maximise your running cost savings!
      </h5>
      <br />
      <h5 style={{ fontSize: 14 }}>
        The power to control your bills is in your hands.
      </h5>
      <h5 style={{ fontSize: 14 }}>
        Use this calculator to discover the best setting for your new Thermann
        Smart Electric water heater.
      </h5>
      <h5 style={{ fontSize: 14 }}>
        Take a few minutes to configure your new water heater and to maximise
        your running cost savings.
      </h5>
      <br />
      <div className="radioDiv">
        <Input
          type="checkbox"
          className="radio"
          onChange={(event) => selectTerm(event)}
          style={{ marginTop: 0, marginRight: 6 }}
        />
        <span className="terms">
          I have read, understood and agree to the following terms and
          conditions. Thermann does not endorse or recommend any particular
          plan. Pian information is provided by energy companies. Thermann does
          not guarantee or warrant the accuracy or currency of the information
          provided. Cost estimates are indicative and should be used as a guide
          only. Your actual costs may vary.
        </span>
      </div>
      <Button
        onClick={() => start(1)}
        disabled={!access}
        className={`${access ? 'start-button-access' : 'start-button'}`}
      >
        Start
      </Button>
    </div>
  );
}

export default StartPage;
