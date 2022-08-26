import { useState } from 'react';
import ImportCyber from '../ImportCyber';
import ImportClassic from '../ImportClassic';
import ScrollContainer from './ScrollContainer/';
import React from 'react';
import DropdownMenu from './Dropdown';
import poem from '../Data/poem.json';

function Container() {
  const [style, setStyle] = useState(0);
  var images;
  var content;
  if (style === 0) {
    return (
      <DropdownMenu captions={["Classic", "Cyberpunk"]} setStyle={setStyle} />
    )
  }
  if (style['value'] === "Cyberpunk") {
    images = ImportCyber();
    content = poem["cyberpunk"];
  } else {
    images = ImportClassic();
    content = poem["classic"];
  }

  return (
    <g>
    <DropdownMenu captions={["Classic", "Cyberpunk"]} setStyle={setStyle} />

      <ScrollContainer
      image={images[0]}
      content={
        [
        content[0]
        ]
      }/>
      <ScrollContainer
      image={images[1]}
      content={
        [
          content[1],
          content[2]
        ]
      }/>
      <ScrollContainer
      image={images[2]}
      content={
        [
          content[3],
          content[4],
        ]
      }/>
      <ScrollContainer
      image={images[3]}
      content={
        [
          content[5],
          content[6]
        ]
      }/>
      <ScrollContainer
      image={images[4]}
      content={
        [content[7]]
      }/>
      <ScrollContainer
      image={images[5]}
      content={
        [
          content[8],
          content[9],
          content[10],
        ]
      }/>
      <ScrollContainer
      image={images[6]}
      content={
        [
          content[11],
          content[12],
          content[13],
        ]
      }/>
      <p>
        All images were generated thanks to <a href="https://www.midjourney.com/home/">Midjourney AI</a> and its diffusion model. View all the generated images and prompts on the Github <a href="https://github.com/axyzhao/ozymandias">repo</a>.
      </p>

    </g>
  );
}

export default Container;
