import React, {Component} from 'react';
import {connect} from "react-redux";
import {setSearchField, requestRobots} from "../actions.js";

import MainPage from '../components/MainPage/MainPage';


//From reducer
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    kittens: state.requestRobots.kittens,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
  }


class App extends Component{
  render() {
    return <MainPage {...this.props}/>
    }
  }


export default connect(mapStateToProps, mapDispatchToProps) (App);
