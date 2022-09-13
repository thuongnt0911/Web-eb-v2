import React, { Component } from 'react';
import Slider from './slider';

function Home() {
  const sliderData = [
    { title: "slider 1", content: "content1" },
    { title: "slider 2", content: "content2" }
  ]

  return (
    <div className='base-container'>
      {
        sliderData.map((item) => (
          < Slider title={item.title} content={item.content} />
        ))
      }

    </div>
  );
}

export default Home;
