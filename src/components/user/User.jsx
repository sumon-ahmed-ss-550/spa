import React from "react";
import { useLoaderData } from "react-router";

const User = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Name : {data.name}</h1>
      <h2>Username : {data.username}</h2>
      <p>Company: {data.company.name}</p>
      <p>Website: {data.website}</p>
      <p>Email: {data.email}</p>
      <p>Phone : {data.phone}</p>
      <div>
        Address _
        <address>
          <p>Street : {data.address.street}</p>
          <p>Suite : {data.address.suite}</p>
          <p>City : {data.address.city}</p>
          <p>Zipcode : {data.address.zipcode}</p>
        </address>
      </div>
    </div>
  );
};

export default User;
