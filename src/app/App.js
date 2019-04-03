import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import UsersPage from './../components/UsersPage'
import UsersPageGrid from './../components/UsersPageGrid'
import fetchPeople from './../services/FetchPeople'
import Loading from '../components/Loading'
import SearchBar from '../components/SearchBar'
import About from './../components/About'
import EmptySearch from './../components/EmptySearch'
import { Route } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      search: [],
      query: "",
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
      })
  }

  searchHandler = (event) => {
    const { people } = this.state;
    let searchQuery = event.target.value.toLowerCase()

    function searchFilter(user) {
      const fullName = `${user.name.toLowerCase()} ${user.surname.toLowerCase()}`

      if (searchQuery === '') {
        return;
      } else {
        return fullName.includes(searchQuery);
      }
    }

    let result = people.filter(searchFilter)

    this.setState({
      search: result,
      query: searchQuery
    })
  }


  mainPage = () => {
    const { people, search, query, layoutSwitch } = this.state;

    return <>
      <SearchBar searchHandler={this.searchHandler} />
      {!people.length ?
        <Loading /> :
        query !== "" && !search.length ?
          <EmptySearch /> :
          layoutSwitch ?
            <UsersPage users={search.length ? search : people} /> :
            <UsersPageGrid users={search.length ? search : people} />
      }
    </>
  }

  render() {
    const { layoutSwitch } = this.state;

    return (
      <>
        <Header onClick={this.onClick} className={layoutSwitch ? "fas fa-th" : "fas fa-list"} refresh={this.refresh} />
        <main>
          <Route exact path="/" component={this.mainPage} />
          <Route path="/about/" component={About} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;