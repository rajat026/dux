import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';

function StepOne(props) {
  const [people, setPeople] = useState(0);
  const [element, setElement] = useState(0);
  const { handleStep } = props;

  const nextStep = (value) => {
    handleStep(value);
  };

  const decreasePeople = () => {
    if (people > 0) {
      setPeople((prevPeople) => prevPeople - 1);
    }
  };

  const decreaseElement = () => {
    if (element > 0) {
      setElement((prevElement) => prevElement - 1);
    }
  };

  const increasePeople = () => {
    if (people >= 0 && people <= 5) {
      setPeople((prevPeople) => prevPeople + 1);
    }
  };

  const increaseElement = () => {
    setElement((prevElement) => prevElement + 1);
  };

  return (
    <div>
      <h2 style={{ marginTop: 40 }} className="welcome-text">
        STEP 1
      </h2>
      <h5 style={{ fontSize: 'medium' }} className="description-text">
        YOUR INFORMATION
      </h5>
      <br />

      <div>
        <Label>Please enter your postcode</Label>
        <Input className="postcode" type="text" />
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
          <span className="fadedText">Up to 6</span>
        </div>
      </div>
      <br />
      <div>
        <Label>Element size</Label>
        <div style={{ display: 'flex' }}>
          <Button onClick={() => decreaseElement()} className="inc-dec">
            -
          </Button>
          <span className="inc-dec noBorder">{element}</span>
          <Button onClick={() => increaseElement()} className="inc-dec">
            +
          </Button>
          <span className="fadedText">KW</span>
        </div>
      </div>
      <Button onClick={() => nextStep(2)} className="start-button-access">
        Next step
      </Button>
    </div>
  );
}

export default StepOne;
