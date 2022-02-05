import React from 'react';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

render() {
  return (
    <div className="App">
        <Home />
        <Portfolio />
        <Quote />        
        <Footer />
    </div>
  );
}
}
export default App;
