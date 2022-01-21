import React, { useState } from 'react';

function Card() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  return <div>{title}</div>;
}

export default Card;
