import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollContainer = (props) => {

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const {
    image, title, mobile, content,
  } = props;

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ margin: '1vh 0'}}>
      <div className="image-container">
        <img src={image} alt="Test"/>
      </div>
      <Scrollama offset={0.2} onStepEnter={onStepEnter} >
        {content.map((a, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div className="textbox">
              {a}
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollContainer;
