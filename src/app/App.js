import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../components/UsersPage'
import UsersPageGrid from './../components/UsersPageGrid'
import fetchPeople from './../services/FetchPeople'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      search: [],
      layoutSwitch: true,
    }
  }

  onClick = () => {
    this.setState({ layoutSwitch: !this.state.layoutSwitch })
    localStorage.setItem('layoutState', !this.state.layoutSwitch)
  }

  refresh = () => {
    fetchPeople()
      .then((users) => {
        this.setState({ people: users })
      })
  }

  componentDidMount() {
    fetchPeople()
      .then((users) => {
        this.setState({
          people: users,
          layoutSwitch: JSON.parse(localStorage.getItem('layoutState')),
        })
        // console.log(users);
      })
  }

  searchHandler = (event) => {
    const { people } = this.state;

    let searchQuery = event.target.value.toLowerCase()
    console.log(searchQuery)
    let result = people.filter(user => user.name.toLowerCase().includes(searchQuery))
    console.log(result)
    this.setState({
      search: result
    })
  }

  render() {
    const { people, search, layoutSwitch } = this.state;

    return (
      <>
        <Header onClick={this.onClick} className={layoutSwitch ? "fas fa-th" : "fas fa-list"} refresh={this.refresh} />
        <SearchBar searchHandler={this.searchHandler} />
        {!people.length ? <Loading /> :

          layoutSwitch ?
            <UsersPage users={search.length ? search : people} /> :
            <UsersPageGrid users={search.length ? search : people} />
        }
        <Footer />
      </>
    );
  }
}

export default App;