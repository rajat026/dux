import React, { useEffect, useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
/* eslint-disable */

function StepFour(props) {
  const [tariff, setTariff] = useState({
    rate: true,
    time: false,
    peak: false,
    other: false,
  });

  // Input fields
  const [rate, setRate] = useState('');
  const [peak, setPeak] = useState('');
  const [shoulder, setShoulder] = useState('');
  const [offPeak, setOffPeak] = useState('');
  const [controlled, setControlled] = useState('');

  const { handleStep } = props;

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('four')) !== null) {
      setRate(JSON.parse(window.sessionStorage.getItem('four')).rate);
      setPeak(JSON.parse(window.sessionStorage.getItem('four')).peak);
      setShoulder(JSON.parse(window.sessionStorage.getItem('four')).shoulder);
      setOffPeak(JSON.parse(window.sessionStorage.getItem('four')).offPeak);
      setControlled(
        JSON.parse(window.sessionStorage.getItem('four')).controlled,
      );

      setTariff({
        rate: JSON.parse(window.sessionStorage.getItem('four')).tariff.rate,
        time: JSON.parse(window.sessionStorage.getItem('four')).tariff.time,
        peak: JSON.parse(window.sessionStorage.getItem('four')).tariff.peak,
        other: JSON.parse(window.sessionStorage.getItem('four')).tariff.other,
      });
    }
  }, []);

  const nextStep = (value) => {
    handleStep(value);
    window.sessionStorage.removeItem('four');
    const data = {
      tariff: tariff,
      rate: rate,
      peak: peak,
      shoulder: shoulder,
      offPeak: offPeak,
      controlled: controlled,
    };
    window.sessionStorage.setItem('four', JSON.stringify(data));
  };

  const backStep = (value) => {
    handleStep(value);
  };

  return (
    <div>
      <h2 style={{ marginTop: 40 }} className="welcome-text">
        STEP 4
      </h2>
      <h5 style={{ fontSize: 'medium' }} className="description-text">
        SELECT YOUR TARIFF SYSTEM
      </h5>
      <br />

      {/* Rate */}
      <div className="tariff-div">
        <Input
          type="radio"
          className="pv-radio"
          checked={tariff.rate}
          onChange={() => {
            setTariff({ rate: true, time: false, peak: false, other: false });
            setPeak('');
            setShoulder('');
            setControlled('');
            setOffPeak('');
          }}
          style={{ marginRight: 6, marginTop: 0 }}
        />
        <span className="type-text">Flat Rate / Single Rate</span>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Input
            disabled={!tariff.rate}
            type="input"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            style={{ marginRight: 6, width: '30%' }}
          />
          <span className="fadedText">cents/KWh</span>
        </div>
      </div>
      <br />

      {/* Time */}
      <div className="tariff-div" style={{ display: 'block', height: 155 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
          <Input
            type="radio"
            className="pv-radio"
            checked={tariff.time}
            onChange={() => {
              setTariff({ rate: false, time: true, peak: false, other: false });
              setRate('');
              setControlled('');
            }}
            style={{ marginRight: 6, marginTop: 0 }}
          />
          <span className="type-text">Time of use</span>
        </div>
        <div className="time-div" style={{ marginBottom: 3 }}>
          <Input
            type="radio"
            className="pv-radio"
            checked={tariff.rate}
            onChange={() =>
              setTariff({ rate: true, time: false, peak: false, other: false })
            }
            style={{ marginRight: 6, marginTop: 0, visibility: 'hidden' }}
          />
          <Label className="type-text">Peak</Label>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Input
              disabled={!tariff.time}
              type="input"
              value={peak}
              onChange={(event) => setPeak(event.target.value)}
              style={{ marginRight: 6, width: '30%' }}
            />
            <span className="fadedText">cents/KWh</span>
          </div>
        </div>
        <div className="time-div" style={{ marginTop: 3, marginBottom: 3 }}>
          <Input
            type="radio"
            className="pv-radio"
            checked={tariff.rate}
            onChange={() =>
              setTariff({ rate: true, time: false, peak: false, other: false })
            }
            style={{ marginRight: 6, marginTop: 0, visibility: 'hidden' }}
          />
          <Label className="type-text">Shoulder</Label>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Input
              disabled={!tariff.time}
              type="input"
              value={shoulder}
              onChange={(event) => setShoulder(event.target.value)}
              style={{ marginRight: 6, width: '30%' }}
            />
            <span className="fadedText">cents/KWh</span>
          </div>
        </div>
        <div className="time-div" style={{ marginBottom: 3 }}>
          <Input
            type="radio"
            className="pv-radio"
            checked={tariff.rate}
            onChange={() =>
              setTariff({ rate: true, time: false, peak: false, other: false })
            }
            style={{ marginRight: 6, marginTop: 0, visibility: 'hidden' }}
          />
          <Label className="type-text">Off peak</Label>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Input
              disabled={!tariff.time}
              type="input"
              value={offPeak}
              onChange={(event) => setOffPeak(event.target.value)}
              style={{ marginRight: 6, width: '30%' }}
            />
            <span className="fadedText">cents/KWh</span>
          </div>
        </div>
      </div>
      <br />

      {/* Peak */}
      <div className="tariff-div">
        <Input
          type="radio"
          className="pv-radio"
          checked={tariff.peak}
          onChange={() => {
            setTariff({ rate: false, time: false, peak: true, other: false });
            setPeak('');
            setShoulder('');
            setRate('');
            setOffPeak('');
          }}
          style={{ marginRight: 6, marginTop: 0 }}
        />
        <span className="type-text">Controlled load off peak</span>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Input
            disabled={!tariff.peak}
            type="input"
            value={controlled}
            onChange={(event) => setControlled(event.target.value)}
            style={{ marginRight: 6, width: '30%' }}
          />
          <span className="fadedText">cents/KWh</span>
        </div>
      </div>
      <br />

      {/* Other */}
      <div className="tariff-div" style={{ justifyContent: 'start' }}>
        <Input
          type="radio"
          className="pv-radio"
          checked={tariff.other}
          onChange={() => {
            setTariff({ rate: false, time: false, peak: false, other: true });
            setRate('');
            setPeak('');
            setShoulder('');
            setRate('');
            setOffPeak('');
          }}
          style={{ marginRight: 6, marginTop: 0 }}
        />
        <span className="type-text">Don't know</span>
      </div>

      <Button outline onClick={() => backStep(3)} className="back-button">
        Back
      </Button>
      <Button onClick={() => nextStep(5)} className="start-button-access">
        Submit
      </Button>
    </div>
  );
}

export default StepFour;
