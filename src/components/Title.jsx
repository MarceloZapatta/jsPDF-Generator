import React from 'react';

interface TitleProps {
  title: string;
}

export default function Title(props: TitleProps): JSX.Element {
  const { title } = props;
  return <h1>{title}</h1>;
}
