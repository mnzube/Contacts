import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { setSearchField, requestDevelopers } from "../actions";
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return {
    searchField: state.searchDevelopers.searchField,
    developers: state.requestDevelopers.developers,
    isPending: state.requestDevelopers.isPending,
    error: state.requestDevelopers.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestDevelopers: () => dispatch(requestDevelopers())
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      cohort6: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({ cohort6:users})});
  }

  render() {
    const { cohort6 } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCohort6 = cohort6.filter(Cohort6 => {
      return Cohort6.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Developers Card List</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList cohort6={filteredCohort6} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

App.propTypes = {
  searchField: PropTypes.strings,
  onSearchChange: PropTypes.string,
  onSearchFieldtoLowerCase : PropTypes.string
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
