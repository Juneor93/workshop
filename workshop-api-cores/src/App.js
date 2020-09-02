import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Api from './components/api';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <Header/>
          <Api/>
          <Footer/>
        </div>
      );
    }
  }

export default App;

