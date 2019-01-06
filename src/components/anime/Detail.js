import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

class Detail extends Component {
  state = {
    detail: {},
    img: {}
  };

  componentDidMount() {
    axios
      .get(`https://kitsu.io/api/edge/anime/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          detail: res.data.data.attributes,
          img: res.data.data.attributes.coverImage
        });
      });
  }

  render() {
    const { detail } = this.state;
    const { img } = this.state;

    if (
      detail === undefined ||
      img === undefined ||
      Object.keys(detail).length === 0
    ) {
      return <Spinner />;
    } else {
      if (img !== null) {
        return (
          <div id="detail" className="card mb-4">
            <img
              className="card-img-top"
              id="pic-title"
              src={img.large}
              alt="Card cap"
            />
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                {detail.canonicalTitle}
              </h2>
              <p className="card-text">{detail.synopsis}</p>
              <h4 className="card-text">
                <b>Rating</b>: {detail.averageRating}/100 <br />
                <b>Popularity Rank</b> : {detail.popularityRank}
              </h4>
            </div>
          </div>
        );
      } else {
        return (
          <div id="detail" className="card mb-3">
            <img
              className="card-img-top"
              id="pic-title"
              src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/06/08/37562897b51be79.jpg"
              alt="Card cap"
            />
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                {detail.canonicalTitle}
              </h3>
              <p className="card-text">{detail.synopsis}</p>
              <p className="card-text">
                <b>Rating</b>: {detail.averageRating}/100 <br />
                <b>Popularity Rank</b> : {detail.popularityRank}
              </p>
            </div>
          </div>
        );
      }
    }
  }
}

export default Detail;
