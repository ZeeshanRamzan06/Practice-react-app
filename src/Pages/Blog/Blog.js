import React from 'react';
import './Blog.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: 'The Benefits of Eating Fresh Fruits',
      excerpt: 'Discover the health benefits of eating fresh, organic fruits directly from farms. A diet rich in fruits can improve your energy, boost your immune system, and make your skin glow.',
    },
    {
      id: 2,
      title: 'Sustainable Farming Practices You Should Know',
      excerpt: 'Sustainability in farming is key to a healthier environment and fresher produce. Learn about the eco-friendly practices our farmers follow to ensure the best quality and minimum environmental impact.',
    },
    {
      id: 3,
      title: 'How to Store Vegetables for Maximum Freshness',
      excerpt: 'Proper storage techniques can help keep your vegetables fresher for longer. In this blog, we share the best tips and tricks for storing your veggies to maximize their shelf life.',
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="blog-page">
      <h1>Our Blog</h1>
      <p>Read our latest articles on healthy living, fresh produce, and sustainability.</p>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Blog;
