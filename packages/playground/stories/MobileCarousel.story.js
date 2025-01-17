import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  PictureCard,
  MobileCarousel,
} from '@appearhere/bloom';

const StorySlide = ({ number }) => (
  <div key={`slide-${number}`}>
    <PictureCard
      src={`https://placekitten.com/g/287/4${number * 2 + 10}`}
      style={{
        height: '300px',
        verticalAlign: 'middle',
        textAlign: 'center',
        fontSize: '5rem',
        width: '200px'
      }}
      center
      href="#"
    >
      {number}
    </PictureCard>
  </div>
);
const slides = [...Array(10).keys()].map(i => <StorySlide number={i} key={i} />);


storiesOf('MobileCarousel', module)
.add('Default', () => (
  <MobileCarousel slidesToShow={4} onChange={action('Slide changed')}>{slides}</MobileCarousel>
))
.add('With Title', () => (
  <MobileCarousel title="Carousel Title" slidesToShow={4} onChange={action('Slide changed')}>{slides}</MobileCarousel>
));
