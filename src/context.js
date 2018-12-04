import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
   anime_list: [],
   heading: "Top Rated Anime"
  };

  componentDidMount(){
    axios.get('https://kitsu.io/api/edge/anime')
    .then(res => {
      console.log(res.data.data)
      this.setState({ anime_list: res.data.data
       });
    })
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