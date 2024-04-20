import React, { useState } from "react";
import "../styles/postoffice.css";
import { useLocation } from "react-router-dom";
import { Flex } from "antd";

const PostOffice = () => {
  const location = useLocation();
  const postOffices = location.state?.postOffices || [];

  const [filter, setFilter] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    const getData = e.target.value;
    setButtonClicked(getData);
  };

  const handleClick = () => {
    setButtonClicked(true);
  };

  const filteroffices = postOffices.filter((office) => office.Name === filter);

  return (
    <div>
      <h1>Post Office Page</h1>
      <span className="form">
        <input type="text" onChange={handleChange} />
        <button className="btn" onClick={handleClick}>
          Filter
        </button>
      </span>
      <div className="post-offices">
        {postOffices.length === 0 && !buttonClicked && (
          <h2
            style={{
              width: "100vw",
              textAlign: "center",
            }}
          >
            Couldn’t find the postal data you’re looking for…
          </h2>
        )}
        {buttonClicked
          ? filteroffices.map((office, index) => (
              <div key={index} className="post-office">
                <p>
                  <strong>Name: </strong>
                  {office.Name}
                </p>
                <p>
                  <strong>Branch Type:</strong> {office.BranchType}
                </p>
                <p>
                  <strong>Delivery Status:</strong> {office.DeliveryStatus}
                </p>
                <p>
                  <strong>District :</strong> {office.District}
                </p>
                <p>
                  <strong>Division :</strong> {office.Division}
                </p>
                <p>
                  <strong>Circle:</strong> {office.Circle}
                </p>
              </div>
            ))
          : postOffices.map((office, index) => (
              <div key={index} className="post-office">
                <p>
                  <strong>Name: </strong>
                  {office.Name}
                </p>
                <p>
                  <strong>Branch Type:</strong> {office.BranchType}
                </p>
                <p>
                  <strong>Delivery Status:</strong> {office.DeliveryStatus}
                </p>
                <p>
                  <strong>District :</strong> {office.District}
                </p>
                <p>
                  <strong>Division :</strong> {office.Division}
                </p>
                <p>
                  <strong>Circle:</strong> {office.Circle}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PostOffice;
