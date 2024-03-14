import React, { useEffect, useState } from 'react';
import { Button, Input, Label } from 'reactstrap';

/* eslint-disable */
function StepOne(props) {
  const [postcode, setPostcode] = useState('');
  const [people, setPeople] = useState(0);
  const [element, setElement] = useState('');
  const { handleStep } = props;

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('one')) !== null) {
      setPeople(JSON.parse(window.sessionStorage.getItem('one')).people);
      setPostcode(JSON.parse(window.sessionStorage.getItem('one')).postcode);
      setElement(JSON.parse(window.sessionStorage.getItem('one')).element);
    }
  }, []);

  const nextStep = (value) => {
    handleStep(value);
    window.sessionStorage.removeItem('one');
    const data = {
      people: people,
      postcode: postcode,
      element: element,
    };
    window.sessionStorage.setItem('one', JSON.stringify(data));
  };

  const decreasePeople = () => {
    if (people > 0) {
      setPeople((prevPeople) => prevPeople - 1);
    }
  };

  const increasePeople = () => {
    setPeople((prevPeople) => prevPeople + 1);
  };

  const handlePostcode = (event) => {
    setPostcode(event.target.value);
  };

  return (
    <>
      <h2 style={{ marginTop: 40 }} className="welcome-text">
        STEP 1
      </h2>
      <h5 style={{ fontSize: 'medium' }} className="description-text">
        YOUR INFORMATION
      </h5>
      <br />

      <div>
        <Label>Please enter your postcode</Label>
        <Input
          className="input-step-one"
          type="select"
          value={postcode}
          onChange={(event) => handlePostcode(event)}
        >
          <option value="" disabled selected>
            eg. 2000
          </option>
          <option value="382481">382481</option>
          <option value="307001">307001</option>
          <option value="457292">457292</option>
          <option value="123987">123987</option>
        </Input>
      </div>
      <br />
      <div>
        <Label>Number of people</Label>
        <div style={{ display: 'flex' }}>
          <Button onClick={() => decreasePeople()} className="inc-dec">
            -
          </Button>
          <span className="inc-dec noBorder">{people}</span>
          <Button onClick={() => increasePeople()} className="inc-dec">
            +
          </Button>
        </div>
      </div>
      <br />
      <div>
        <Label>Element size</Label>
        <div style={{ display: 'flex' }}>
          <Input
            className="input-step-one-element"
            type="select"
            value={element}
            onChange={(event) => setElement(event.target.value)}
          >
            <option value="" disabled selected>
              size
            </option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </Input>
          <span className="fadedText">KW</span>
        </div>
      </div>
      <Button
        disabled={postcode === '' || element === ''}
        onClick={() => nextStep(2)}
        className="start-button-access"
      >
        Next step
      </Button>
    </>
  );
}

export default StepOne;
