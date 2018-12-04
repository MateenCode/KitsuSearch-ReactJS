import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

export default class Anime extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { anime_list, heading } = value;

          if (anime_list === undefined || anime_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className=" text-center mb-4">{heading}</h3>
                <div className="row">
                  {anime_list.map(item => (
                    <div className="col-md-4" key={item.id}>
                      <div className="card">
                       
                        <div className="card-body">
                          <p>{item.attributes.canonicalTitle}</p>
                          <Link
                            to={`anime/detail/${item.id}`}
                            className="btn btn-primary"
                          >
                            Details
                          </Link>
                        </div>
                        <br />
                      </div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

