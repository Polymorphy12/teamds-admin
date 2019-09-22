import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './header/Header';
import Footer from './footer/Footer';
import RestaurantCard from './restaurantCard/RestaurantCard';

function App() {
  return (
    <div>
      <Header />
      <RestaurantCard />
      <Footer />
    </div>
  );
}

export default App;
