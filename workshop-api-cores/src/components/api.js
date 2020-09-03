import React from 'react';

class Api extends React.Component {
    state = {
        paleta: []
    };
  
    componentDidMount() {
<<<<<<< HEAD
        fetch('http://www.colr.org/json/colors/random/65')
=======
        fetch('http://www.colr.org/json/colors/random/60')
>>>>>>> master
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
                    <div style={{backgroundColor: "#" + item}}><p>#{item}</p></div>
                ))}
                </div>)
        }
        return (
<<<<<<< HEAD
            <div  className="conteudo">
=======
            <div>
>>>>>>> master
                <div className="lateral"></div>
            {content}
            </div>
        );
    }
  }
  
  export default Api;