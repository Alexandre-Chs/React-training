import React from "react";

function Profile({ count, profile }) {
  return (
    <div>
      <ul>
        <li className="list-group-item">
          <p className="h2">User ID: {count}</p>
        </li>
        <li className="list-group-item">
          <strong>Nom: </strong>
          {profile.name}
        </li>
        <li className="list-group-item">
          <strong>Pseudo: </strong>
          {profile.username}
        </li>
        <li className="list-group-item">
          <strong>Email: </strong>
          {profile.email}
        </li>
      </ul>
    </div>
  );
}

export default React.memo(Profile);
