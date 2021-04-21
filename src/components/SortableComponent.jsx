import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setItems } from '../features/pdf/pdfSlice';
import Title from './Title';
import Text from './Text';

const SortableItem = SortableElement(({ value }: any) => <li>{value}</li>);

const SortableList = SortableContainer(({ items }: any) => (
  <ul>
    {items.map((item: any, index: number) => {
      if (item.title) {
        return (
          <SortableItem
            key={`item-${item.title}`}
            index={index}
            value={<Title title={item.title} />}
          />
        );
      }

      if (item.text) {
        return (
          <SortableItem
            key={`item-${item.text}`}
            index={index}
            value={<Text text={item.text} />}
          />
        );
      }
      return null;
    })}
  </ul>
));

export default function SortableComponent(): JSX.Element {
  const items = useAppSelector((state) => state.pdf.items);
  const dispatch = useAppDispatch();

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    dispatch(setItems(arrayMove(items, oldIndex, newIndex)));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} />;
}
