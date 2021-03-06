import React from 'react';

const SpeakerPreview = ({ title, name, blurb, picture }) => (
    <section>
      <img src={picture} />
      <h4>{title}</h4>
      <h5>{name}</h5>
      <p>{blurb}</p>
    </section>
  );

export default SpeakerPreview;
