import React, { useEffect, useState } from "react";
import image from "../assets/images/clean.jpg";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { useNavigate } from "react-router-dom";
import "../assets/css/maids.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { maids } from "./Auth/axios";
import axios from "axios";

const Maids = () => {
  const history = useNavigate();
  const [data, setData] = useState({ search: "" });
  const [people, setPeople] = useState([]);

  // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(maids)
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container maidsContainer">
        <SearchBar
          style={{
            margin: "0 auto",
            maxWidth: 400,
            borderRadius: 4,
            boxShadow: "0px 1px 8px 1px lightgray",
          }}
          placeholder="Search by location..."
          value={data.search}
          onChange={(newValue) => setData({ search: newValue })}
          onRequestSearch={() => goSearch(data.search)}
        />
        <div className="row" style={{ marginTop: "7vh", marginBottom: "7vh" }}>
          <div className="col-md-8 text-center">
            <div className="card3 mb-3">
              <div className="d-flex align-items-center">
                <img className="img-fluid maidImg" src={image} alt="" />
                <h6 className="m-2">Name : Ann Kaboyo</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>Contract : Part Time</p>
                </div>
                <div>
                  <Link to="/profile" className="btn maidBtn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card3">
              <p>Location : Kilimani</p>
              <p>Experience : 4 years</p>
              <p>
                Job Status :{" "}
                <span className="badge bg-primary">Currently Available</span>{" "}
              </p>
            </div>
          </div>
          <div className="col-md-8 text-center">
            <div className="card3 mb-3">
              <div className="d-flex align-items-center">
                <img className="img-fluid maidImg" src={image} alt="" />
                <h6 className="m-2">Name : Ann Kaboyo</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>Contract : Part Time</p>
                </div>
                <div>
                  <Link to="/profile" className="btn maidBtn">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card3">
              <p>Location : Kilimani</p>
              <p>Experience : 4 years</p>
              <p>
                Job Status :{" "}
                <span className="badge bg-primary">Currently Available</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Maids;
