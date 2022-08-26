import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
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

  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'gray',
      boxShadow: theme.shadows[1],
      fontSize: 20,
      fontFamily: "palatino",
      maxHeight: "72px",
      maxWidth: "650px",
    },
  }));

  return (
    <div style={{ margin: '1vh 0'}}>
      <div className="image-container">
        <img src={image} alt="Test"/>
      </div>
      <Scrollama offset={0.2} onStepEnter={onStepEnter} >
        {content.map((a, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
          <LightTooltip title={a["prompt"]}>
            <div className="textbox">
              {a["text"]}
            </div>
          </LightTooltip>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default ScrollContainer;
