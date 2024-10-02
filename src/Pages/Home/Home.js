import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Items from '../../Components/Items/Items'

const items = [
  {
    id: 1,
    title: 'Fresh Apple',
    description: 'Crisp, fresh apples directly from the farm. Perfect for snacking and baking.',
    image: 'https://example.com/apple.jpg',
  },
  {
    id: 2,
    title: 'Organic Carrots',
    description: 'Sweet and crunchy organic carrots, great for soups and salads.',
    image: 'https://example.com/carrots.jpg',
  },
  {
    id: 3,
    title: 'Green Spinach',
    description: 'Freshly harvested green spinach, packed with nutrients.',
    image: 'https://example.com/spinach.jpg',
  },
];
const Home = () => {
  return (
    <>
   <Navbar/>
    <Header/>
    <Items items={items}/>
    <Footer/>
    </>
  )
}

export default Home