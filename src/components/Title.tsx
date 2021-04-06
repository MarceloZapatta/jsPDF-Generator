import React from 'react'

interface TitleProps {
  title: string
}

export default function Title(props: TitleProps) {
  const { title } = props
  return <h1>{props.title}</h1>
}
