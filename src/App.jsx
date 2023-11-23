import React from "react";
import axios from 'axios';
import Card from "./Card";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {advice: ''}

    this.onFetchAdvice = this.onFetchAdvice.bind(this);
  }

  componentDidMount(){
    this.onFetchAdvice();
  }

  onFetchAdvice(){
    const id = Math.floor(Math.random() * 224);

    axios.get(`https://api.adviceslip.com/advice/${id}`)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render(){
    const {advice} = this.state;

    return(
      <div className="w-full h-[100vh] bg-main-bg bg-cover flex justify-center items-center">
        <Card advice={advice} onFetchAdvice={this.onFetchAdvice} />
      </div>
    )
  }
}

export default App;