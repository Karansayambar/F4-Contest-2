import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/index.css";
// import PostOffice from "./PostOffices";
const Home = () => {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState("");
  const [fetchedPostOffices, setFetchedPostOffices] = useState([]);
  const [pinCodeValid, setPincodeValid] = useState(true);

  const handlePincodeChange = (e) => {
    const newPin = e.target.value;
    setPincode(newPin);
    if (newPin.length === 6) {
      setPincodeValid(true);
    } else {
      setPincodeValid(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (pincode.trim() !== "") {
          const response = await axios.get(
            `https://api.postalpincode.in/pincode/${pincode}`
          );
          const postOffices = response.data[0]?.PostOffice || [];
          setFetchedPostOffices(postOffices);
          console.log("Fetched Post Offices:", postOffices);
        }
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    })();
  }, [pincode]);
  const fetchData = async () => {
    navigate("/PostOffice", { state: { postOffices: fetchedPostOffices } });
  };

  return (
    <div className="container">
      <h2>Enter Pincode</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={handlePincodeChange}
        />
        {!pinCodeValid && (
          <p style={{ color: "red" }}>Pincode must be 6 characters long</p>
        )}
        {
          <button className="btn" onClick={fetchData}>
            Lookup
          </button>
        }
      </form>
    </div>
  );
};

export default Home;
