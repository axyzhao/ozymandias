import ScrollContainer from './components/ScrollContainer/';
import React from 'react';
import visage from './Images/visage.png';
import pedestal from './Images/pedestal.png';
import wreck from './Images/wreck.png';
import traveler from './Images/traveler.png';
import trunks from './Images/trunks.png';
import sculptor from './Images/sculptor.png';
import sculptor2 from './Images/sculptor2.png';
import sculptor3 from './Images/sculptor3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> Ozymandias </h2>
      <h3> By Percy Bysshe Shelley </h3>
      <p className="caption"> <a href="https://alzhao.com">Alex Zhao</a> // August 25, 2022 </p>
      <p>
        A thanks to Midjourney AI for enabling this project. View all the generated images and prompts on the Github <a href="https://github.com/axyzhao/ozymandias">repo</a>.
      </p>

      <ScrollContainer
      image={traveler}
      mobile={false}
      content={
        [
        "I met a traveller from an antique land,"
        ]
      }/>
      <ScrollContainer
      image={trunks}
      mobile={false}
      content={
        [
          'Who said—"Two vast and trunkless legs of stone',
          "Stand in the desert. . . . Near them, on the sand,"
        ]
      }/>
      <ScrollContainer
      image={visage}
      mobile={false}
      content={
        [
          "Half sunk a shattered visage lies, whose frown,",
          "And wrinkled lip, and sneer of cold command,"
        ]
      }/>
      <ScrollContainer
      image={sculptor}
      mobile={false}
      content={
        [
          "Tell that its sculptor well those passions read",
          "Which yet survive, stamped on these lifeless things,"
        ]
      }/>
      <ScrollContainer
      image={sculptor3}
      mobile={false}
      content={
        [
          "The hand that mocked them, and the heart that fed;"
        ]
      }/>
      <ScrollContainer
      image={pedestal}
      mobile={false}
      content={
        [
          "And on the pedestal, these words appear:",
          "My name is Ozymandias, King of Kings;",
          "Look on my Works, ye Mighty, and despair!"
        ]
      }/>
      <ScrollContainer
      image={wreck}
      mobile={false}
      content={
        [
          "Nothing beside remains. Round the decay",
          "Of that colossal Wreck, boundless and bare",
          "The lone and level sands stretch far away."
        ]
      }/>
      <a href="https://alzhao.com">Back to homepage</a>

    </div>
  );
}

export default App;
