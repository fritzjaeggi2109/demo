import React, { Component } from 'react';
import './App.css';
import Login from './auth/Login';
import Header from './header/Header';
import Card from './card/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canOperate: false,
      user: ''
    }
  }

  makeLogin(operator, user) {
    this.setState({
      canOperate: operator,
      user
    });
  }

  renderCard() {
    let { canOperate } = this.state;
    if (!canOperate) {
      return <Login makeLogin={(operator, user)=>{ this.makeLogin(operator, user) }}/>
    }

    return <Card />
  }

  render() {
    return (
        <div className="App">
          <Header user={this.state.user}/>
          {this.renderCard()}
        </div>
    );
  }
}

export default App;
