import React from 'react';

interface TextProps {
  text: string;
}

export default function Text(props: TextProps): JSX.Element {
  const { text } = props;
  return <h1>{text}</h1>;
}
