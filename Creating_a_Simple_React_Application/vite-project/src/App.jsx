import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
    return (
    <div className="container">
      <Header title="Player List" />

      <Content/>

      <Footer />
    </div>
  );
}

export default App;
