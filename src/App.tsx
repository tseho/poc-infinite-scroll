import React, {useRef} from 'react';
import './App.css';
import useScrollPosition, {ScrollPosition} from './scroll/useScrollPosition';
import useScrollPositionWithoutParent from './scroll/useScrollPositionWithoutParent';

function App() {
  const rows = Array.from(Array(100).keys());
  const ref = useRef(null);

  useScrollPosition(ref, (position: ScrollPosition) => {
    console.log('with parent', position);
  }, [], 300);

  useScrollPositionWithoutParent(ref, (position: ScrollPosition) => {
    console.log('without parent', position);
  }, [], 300);

  return (
    <div style={{
      alignItems: "stretch",
      border: "1px solid blue",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      height: "calc(100% - 10px)",
      width: "300px",
      overflowY: "auto",
    }}>
      <div>
        <ul ref={ref}>
          {rows.map(row => (
            <li
              key={row}
              style={{
                background: "lightgray",
                height: "40px",
                border: "1px solid #fff",
                display: "block",
              }}>
              {row}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
