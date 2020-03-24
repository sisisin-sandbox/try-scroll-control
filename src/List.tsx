import React from 'react';

const Item = ({
  item,
  parentRef,
}: {
  item: string;
  parentRef: React.RefObject<HTMLDivElement>;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const target = ref.current;
    const parent = parentRef.current;
    if (target && parent) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log(entry.target.textContent);
            observer.unobserve(target);
          }
        },
        { root: parent, rootMargin: '0px', threshold: 1.0 },
      );

      observer.observe(target);
      return () => observer.unobserve(target);
    }
  }, []);
  const props = {
    className: 'item',
    ref,
  };
  return <div {...props}>{item}</div>;
};
export const List: React.FC<{ items: string[] }> = ({ items }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div className="scrollable" ref={ref}>
      {items.map((v, i) => (
        <Item key={v} item={v} parentRef={ref}></Item>
      ))}
    </div>
  );
};
