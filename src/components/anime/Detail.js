import React, { Component } from "react";
import axios from "axios";
class Detail extends Component {
  state = {
    detail: {},
    img: {}
  };

  componentDidMount() {
    axios
      .get(`https://kitsu.io/api/edge/anime/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data.data.attributes);
        this.setState({
          detail: res.data.data.attributes,
          img: res.data.data.attributes.coverImage
        });
      });
  }

  render() {
    const { detail } = this.state;
    const { img } = this.state;
    if (img !== null) {
      return (
        <div className="card mb-3">
          <img
            className="card-img-top"
            id="pic-title"
            src={img.large}
            alt="Card image cap"
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
    } else {
      return (
        <div className="card mb-3">
          <img
            className="card-img-top"
            id="pic-title"
            src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/06/08/37562897b51be79.jpg"
            alt="Card image cap"
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

export default Detail;
