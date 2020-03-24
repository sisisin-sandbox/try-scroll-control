import React from 'react';
import { List } from './List';

const defaultItems = Array.from({ length: 100 }).map((_, i) => `item_${i + 1}`);
export const App: React.FC = () => {
  const [items, setItems] = React.useState(defaultItems);

  return (
    <div>
      <div>content a</div>

      <div className="contentB">
        <div>content b</div>
        <div>
          <button
            onClick={() => setItems([`added_${items.length - defaultItems.length}`, ...items])}
          >
            add
          </button>
        </div>
        <List items={items}></List>
      </div>
    </div>
  );
};
