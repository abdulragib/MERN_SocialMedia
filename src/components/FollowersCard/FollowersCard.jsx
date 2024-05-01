import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowerCard">
      <h4>People you may know</h4>
      <div className="followers-container">
        {persons.map((person, id) => {
          if (person._id !== user._id) {
            return <User person={person} key={id} id={id} />;
          }
        })}
      </div>
    </div>
  );
};

export default FollowersCard;
