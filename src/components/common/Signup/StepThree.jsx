import React, { useEffect, useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
/* eslint-disable */

function StepThree(props) {
  const [duration, setDuration] = useState(1);
  const [pv, setPv] = useState({
    yes: false,
    no: true,
    other: false,
  });
  const { handleStep } = props;

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('three')) !== null) {
      setDuration(JSON.parse(window.sessionStorage.getItem('three')).duration);
      setPv({
        yes: JSON.parse(window.sessionStorage.getItem('three')).pv.yes,
        no: JSON.parse(window.sessionStorage.getItem('three')).pv.no,
        other: JSON.parse(window.sessionStorage.getItem('three')).pv.other,
      });
    }
  }, []);

  const nextStep = (value) => {
    handleStep(value);
    window.sessionStorage.removeItem('three');
    const data = {
      duration: duration,
      pv: pv,
    };
    window.sessionStorage.setItem('three', JSON.stringify(data));
  };

  const backStep = (value) => {
    handleStep(value);
  };

  const decreaseDuration = () => {
    if (duration > 1) {
      setDuration((prevDuration) => prevDuration - 1);
    }
  };

  const increaseDuration = () => {
    if (duration <= 2) {
      setDuration((prevDuration) => prevDuration + 1);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <h2 style={{ marginTop: 40 }} className="welcome-text">
          STEP 3
        </h2>
        <h5 style={{ fontSize: 15 }} className="description-text">
          FREE ELECTRICITY TARIFF
        </h5>
        <br />

        <div>
          <Label>Do you have any periods of free electricity tariff?</Label>
          <div className="pv-div">
            <div>
              <Input
                type="radio"
                className="pv-radio"
                checked={pv.yes}
                onChange={() => setPv({ yes: true, no: false, other: false })}
              />
              <span className="radio-text">Yes</span>
            </div>
            <div>
              <Input
                type="radio"
                className="pv-radio"
                checked={pv.no}
                onChange={() => {
                  setPv({ yes: false, no: true, other: false });
                  setDuration(0);
                }}
              />
              <span className="radio-text">No</span>
            </div>
            <div>
              <Input
                type="radio"
                className="pv-radio"
                checked={pv.other}
                onChange={() => {
                  setPv({ yes: false, no: false, other: true });
                  setDuration(0);
                }}
              />
              <span className="radio-text">Don't know</span>
            </div>
          </div>
        </div>
        <br />
        {pv.yes && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label>What is the duration of the free electricity period?</Label>
            <span style={{ opacity: 0.6, fontSize: 14, marginTop: 0 }}>
              {`(Example, if free electricity period is between 11 am to 2 pm,\n free duration is 3 hours)`}
            </span>
            <div style={{ display: 'flex', marginTop: 8 }}>
              <Button onClick={() => decreaseDuration()} className="inc-dec">
                -
              </Button>
              <span className="inc-dec noBorder">{duration}</span>
              <Button onClick={() => increaseDuration()} className="inc-dec">
                +
              </Button>
              <span className="fadedText">hours</span>
            </div>
          </div>
        )}
      </div>
      <div>
        <Button outline onClick={() => backStep(2)} className="back-button">
          Back
        </Button>
        <Button onClick={() => nextStep(4)} className="next-button-access">
          Next step
        </Button>
      </div>
    </div>
  );
}

export default StepThree;
