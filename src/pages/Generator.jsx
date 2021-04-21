import React from 'react';
import { useAppDispatch } from '../app/hooks';
import SortableComponent from '../components/SortableComponent';
import { addItem } from '../features/pdf/pdfSlice';

function Generator(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClickTitle = () => {
    dispatch(
      addItem({
        title: 'Example title',
      }),
    );
  };

  const handleClickText = () => {
    dispatch(
      addItem({
        text: 'Example text',
      }),
    );
  };

  return (
    <div className="App-main-code">
      <div className="App-main-code-options">
        <ul>
          <li>
            <button
              type="button"
              onClick={handleClickTitle}
              data-testid="button-add-title"
            >
              Title
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleClickText}
              data-testid="button-add-text"
            >
              Text
            </button>
          </li>
          <li>
            <button type="button" data-testid="button-add-image">
              Image
            </button>
          </li>
          <li>
            <button type="button" data-testid="button-add-table">
              Table
            </button>
          </li>
        </ul>
      </div>
      <div className="App-main-code-items">
        <SortableComponent />
      </div>
    </div>
  );
}

export default Generator;
