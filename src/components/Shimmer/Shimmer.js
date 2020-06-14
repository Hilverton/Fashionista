import React from 'react';
import './styles.css';

export function Shimmer() {
  return (
    <>
      {
        Array(8).fill(0).map(item => (
          <div key={item} className="shimmer">
            <div className="shimmer__photo animate"></div>
            <div className="shimmer__footer">
              <div className="shimmer__item shimmer__item--1 h18 animate"></div>
              <div className="shimmer__item shimmer__item--2 h16 animate"></div>
              <div className="shimmer__item shimmer__item--3 h30 animate"></div>
            </div>
        </div>
        ))
      }
    </>
  )
}
