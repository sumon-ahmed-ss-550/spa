import React from "react";
import { NavLink, useLoaderData } from "react-router";
import "./users.css";

const Users = () => {
  const info = useLoaderData();
  return (
    <div id="usersParent">
      {info.map((item) => (
        <div key={item.id} id="usersCard">
          <h1>Name : {item.name}</h1>
          <p>Username : {item.username}</p>
          <p>Website : {item.website}</p>
          <div>
            <NavLink to={`/users/${item.id}`}>
              <button type="button">Show details</button>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
