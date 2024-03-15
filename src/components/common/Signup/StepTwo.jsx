import React, { useState, useEffect } from 'react';
import { Button, Input, Label } from 'reactstrap';
/* eslint-disable */

function StepTwo(props) {
  const [capacity, setCapacity] = useState(1);
  const [tariff, setTariff] = useState(1);
  const [pv, setPv] = useState({
    yes: false,
    no: true,
  });
  const { handleStep } = props;

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('two')) !== null) {
      setCapacity(JSON.parse(window.sessionStorage.getItem('two')).capacity);
      setTariff(JSON.parse(window.sessionStorage.getItem('two')).tariff);
      setPv({
        yes: JSON.parse(window.sessionStorage.getItem('two')).pv.yes,
        no: JSON.parse(window.sessionStorage.getItem('two')).pv.no,
      });
    }
  }, []);

  const nextStep = (value) => {
    handleStep(value);
    window.sessionStorage.removeItem('two');
    const data = {
      capacity: capacity,
      tariff: tariff,
      pv: pv,
    };
    window.sessionStorage.setItem('two', JSON.stringify(data));
  };

  const backStep = (value) => {
    handleStep(value);
  };

  const decreaseCapacity = () => {
    if (capacity > 1) {
      setCapacity((prevCapacity) => prevCapacity - 1);
    }
  };

  const decreaseTariff = () => {
    if (tariff > 1) {
      setTariff((prevTariff) => prevTariff - 1);
    }
  };

  const increaseCapacity = () => {
    setCapacity((prevCapacity) => prevCapacity + 1);
  };

  const increaseTariff = () => {
    setTariff((prevTariff) => prevTariff + 1);
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <h2 style={{ marginTop: 40 }} className="welcome-text">
          STEP 2
        </h2>
        <h5 style={{ fontSize: 15 }} className="description-text">
          PV SYSTEM
        </h5>
        <br />

        <div>
          <Label>Do you have a PV system installed?</Label>
          <div className="pv-div">
            <div className="radio-parent">
              <Input
                type="radio"
                className="pv-radio"
                checked={pv.yes}
                onChange={() => setPv({ yes: true, no: false })}
              />
              <span className="radio-text">Yes</span>
            </div>
            <div className="radio-parent">
              <Input
                type="radio"
                className="pv-radio"
                checked={pv.no}
                onChange={() => {
                  setPv({ yes: false, no: true });
                  setCapacity(0);
                  setTariff(0);
                }}
              />
              <span className="radio-text">No</span>
            </div>
          </div>
        </div>
        <br />
        {pv.yes && (
          <>
            <div>
              <Label>What is the capacity of PV system?</Label>
              <div style={{ display: 'flex' }}>
                <Button onClick={() => decreaseCapacity()} className="inc-dec">
                  -
                </Button>
                <span className="inc-dec noBorder">{capacity}</span>
                <Button onClick={() => increaseCapacity()} className="inc-dec">
                  +
                </Button>
                <span className="fadedText">KW</span>
              </div>
            </div>
            <br />
            <div>
              <Label>What is the feed-in tariff?</Label>
              <div style={{ display: 'flex' }}>
                <Button onClick={() => decreaseTariff()} className="inc-dec">
                  -
                </Button>
                <span className="inc-dec noBorder">{tariff}</span>
                <Button onClick={() => increaseTariff()} className="inc-dec">
                  +
                </Button>
                <span className="fadedText">cents/KWh</span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="d-flex">
        <Button outline onClick={() => backStep(1)} className="back-button">
          Back
        </Button>
        <Button onClick={() => nextStep(3)} className="next-button-access">
          Next step
        </Button>
      </div>
    </div>
  );
}

export default StepTwo;
