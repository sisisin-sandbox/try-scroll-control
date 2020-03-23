import React from 'react';

const defaultItems = Array.from({ length: 100 }).map((_, i) => `item_${i + 1}`);
export const App: React.FC = () => {
  const [items, setItems] = React.useState(defaultItems);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const firstItemRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const con = containerRef.current;
    if (con.scrollTop !== 0) {
      const item = firstItemRef.current;
      con.scrollTo({ top: con.scrollTop + item.offsetHeight });
    }
  });
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
        <div className="scrollable" ref={containerRef}>
          <div>
            {items.map((v, i) => {
              const props = {
                className: 'item',
                key: `${v}_${i}`,
                ...(i === 0 ? { ref: firstItemRef } : {}),
              };
              return <div {...props}>{`${v}`}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
