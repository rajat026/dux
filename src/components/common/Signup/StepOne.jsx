import React, { useEffect, useState } from 'react';
import { Button, Input, Label } from 'reactstrap';

/* eslint-disable */
function StepOne(props) {
  const [postcode, setPostcode] = useState('');
  const [people, setPeople] = useState(1);
  const [element, setElement] = useState('');
  const [postalCodes, setPostalCodes] = useState([]);

  const { handleStep } = props;

  const getPostalCodes = async () => {
    await fetch(
      'https://lb.staging.duxback2base.com.au/api/smart-electric/location?postal_code=2000',
    )
      .then((response) => response.json())
      .then((response) => {
        setPostalCodes(response.data.data);
      });
  };

  useEffect(() => {
    if (JSON.parse(window.sessionStorage.getItem('one')) !== null) {
      setPeople(JSON.parse(window.sessionStorage.getItem('one')).people);
      setPostcode(JSON.parse(window.sessionStorage.getItem('one')).postcode);
      setElement(JSON.parse(window.sessionStorage.getItem('one')).element);
    }
    getPostalCodes();
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
    if (people > 1) {
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
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <h2 style={{ marginTop: 40 }} className="welcome-text">
          STEP 1
        </h2>
        <h5 style={{ fontSize: 15 }} className="description-text">
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
            <option value="" disabled>
              eg. 2000
            </option>
            {postalCodes.map((code, index) => (
              <option
                key={index}
                value={code.place}
              >{`${code.postcode} ${code.place}, ${code.state}`}</option>
            ))}
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
              <option value="" disabled>
                size
              </option>
              <option value="1.8">1.8</option>
              <option value="2.4">2.4</option>
              <option value="3">3</option>
            </Input>
            <span className="fadedText">KW</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          disabled={postcode === '' || element === ''}
          onClick={() => nextStep(2)}
          className="start-button-access"
        >
          Next step
        </Button>
      </div>
    </div>
  );
}

export default StepOne;
