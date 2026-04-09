import React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";
import "./users.css";

const Users = () => {
  const info = useLoaderData();
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div id="usersParent">
      {info.map((item) => (
        <div key={item.id} id="usersCard">
          <h1>Name : {item.name}</h1>
          <p>Username : {item.username}</p>
          <p>Website : {item.website}</p>
          <div>
            {/* <NavLink to={`/users/${item.id}`}>
              <button type="button">Show details {item.id}</button>
            </NavLink> */}
            <button onClick={() => handleNavigate(item.id)}>
              Show details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
