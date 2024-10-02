import React from 'react';
import './Items.css';

const Items = ({ items = [] }) => {
    return (
      <div className="items-section">
        <h2>Our Products</h2>
        <div className="items-grid">
          {items.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="btn-view">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Items;
