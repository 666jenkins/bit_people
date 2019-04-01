import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../components/UsersPage'
import UsersPageGrid from './../components/UsersPageGrid'
import fetchPeople from './../services/FetchPeople'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      layoutSwitch: true,
    }
  }

  onClick = () => {
    this.setState({ layoutSwitch: !this.state.layoutSwitch })
  }
  
  componentDidMount() {
    fetchPeople()
    .then((users) => {
      this.setState({ people: users })
    })
  }


  render() {
    const { people, layoutSwitch } = this.state;

    return (
      <>
        <Header onClick={this.onClick} className={layoutSwitch ? "fas fa-th" : "fas fa-list"} />
        {layoutSwitch ?
          <UsersPage users={people}/> :
          <UsersPageGrid users={people} />
        }
        <Footer />
      </>
    );
  }
}

export default App;