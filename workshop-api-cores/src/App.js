import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
      paleta: []
  };

  componentDidMount() {
      fetch('http://www.colr.org/json/colors/random/60')
          .then(res => res.json())
          .then(res => {
              const paleta = res.colors.map((item) => item.hex).filter( (item) => item) 
              this.setState({paleta});
          });
  }

  render() {
      let content = '' ;

      if (this.state.paleta.length !== 0) {
          content = (<div className="container">
              {this.state.paleta.map(item => (
                  <div style={{backgroundColor: "#" + item, width:'150px',height: '150px', margin: '20px' }}># {item}</div>
              ))}
              </div>)
      }

      return (
          <div>
          {content}
          </div>
      );
  }
}

export default App;

