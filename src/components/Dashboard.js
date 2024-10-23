import React from 'react';

const Dashboard = () => {
  const categories = ['Electronics', 'Clothing', 'Home Appliances', 'Books'];

  return (
    <div className="dashboard">
      <h1>Welcome to ShopEase</h1>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="/img1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$100</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$200</p>
            <button>Add to Cart</button>
          </div>
          {/* Add more products similarly */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;