import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_NAME":
      return {
        ...state,
        anime_list: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    anime_list: [],
    heading: "Top Rated Anime",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/anime")
      .then(res => {
        const value = res.data.data;
        this.setState({
          anime_list: value
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
