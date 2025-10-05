import React, { useEffect, useRef } from 'react';
import img from"../assets/employee.jpg"
const Scroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(scroll);
      }
    };

    scroll();
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        width: '400px',
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        border: '1px solid gray'
      }}
    >
      <img
        src={img}
        alt="Scrolling"
        style={{ display: 'inline-block' }}
      />
      <img
        src={img}
        alt="Scrolling"
        style={{ display: 'inline-block' }}
      />
    </div>
  );
};

export default Scroll;
