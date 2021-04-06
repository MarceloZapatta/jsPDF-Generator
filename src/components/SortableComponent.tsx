import React, { Component, useState } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setItems } from '../features/pdf/pdfSlice'

const SortableItem = SortableElement(({ value }: any) => <li>{value}</li>)

const SortableList = SortableContainer(({ items }: any) => {
  return (
    <ul>
      {items.map((value: any, index: any) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  )
})

export default function SortableComponent() {
  const items = useAppSelector((state) => state.pdf.items);
  const dispatch = useAppDispatch()

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    dispatch(setItems(arrayMove(items, oldIndex, newIndex)));
  }

  return <SortableList items={items} onSortEnd={onSortEnd} />
}