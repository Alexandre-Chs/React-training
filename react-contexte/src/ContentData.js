import React from "react";
import { MyContext } from "./MyContext";

const ContentData = (props) => {
  return (
    <MyContext.Consumer>
      {(data) => {
        return (
          <div id="collapseExample">
            <div className="card card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Nom: {data.name}</li>
                <li className="list-group-item">Age: {data.age}</li>
              </ul>
            </div>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default ContentData;
