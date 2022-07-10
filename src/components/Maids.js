import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { useNavigate } from "react-router-dom";
import "../assets/css/maids.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { maids } from "./Auth/axios";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { userContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { profile } from "./Auth/axios";


const Maids = () => {
  const { id } = useParams();
  const { user } = useContext(userContext);
  const history = useNavigate();
  const [data, setData] = useState({ search: "" });
  const [people, setPeople] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData] = useState({
    image: '',
    name: '',
    email:'',
    bio:'',
    age:'',
    location:'',
    experience:'',
    contract:'',
    job:'',
    marital_status:'',
})
  

  // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

  // useEffect(() => {
  //   axios
  //     .get(maids)
  //     .then((res) => {
  //       console.log(res.data);
  //       setPeople(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response.status);
  //     });
  // }, []);



  const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    })
}

const handleImageChange = (e) => {
    let newData = { ...formData };
    newData["image"] = e.target.files[0];
    setFormData(newData);
};

const handleSubmit = (e)=>{
    e.preventDefault();

    let form_data = new FormData();
    if (formData.image)
    form_data.append("image", formData.image, formData.image.name);
    form_data.append("name", formData.name);
    form_data.append("email", formData.email);
    form_data.append("age", formData.age);
    form_data.append("location", formData.location);
    form_data.append("experience", formData.experience);
    form_data.append("bio", formData.bio);
    form_data.append("marital_status", formData.marital_status);

    axios.post(profile, form_data,{
        headers:{
           'content-type': 'multipart/form-data' 
        }
    })
    .then((res) =>{
        console.log('post is successful');
        console.log(res.data)
        setShow(false)
        toast.success('Your profile is created successfully!')
    })
    .catch((err) =>{
        console.log(err.response.status);
        console.log(err.response.data)
        toast.error('There is a problem!')
    })
}

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
        <div className="row">
          <div className="col-md-2">
            <button className="btn createBtn1 mt-4" onClick={handleShow}>
              Create Profile
              <AiFillPlusCircle className="createIcon m-1" />
            </button>
          </div>
        </div>
        <div className="row" style={{ marginTop: "7vh", marginBottom: "7vh" }}>
          {people.map((maid) => (
            <>
              <div className="col-md-8 text-center" key={maid.id}>
                <div className="card3 m-1">
                  <div className="d-flex align-items-center">
                    {maid.image ? (
                      <img
                        className="img-fluid maidImg"
                        src={maid.image}
                        alt=""
                      />
                    ) : (
                      <FaUserCircle className="placeholderImage" />
                    )}
                    <h6 className="m-2">Name : {maid.name}</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p>Contract : {maid.contract}</p>
                    </div>
                    <div>
                      <Link to={`/profile/${maid.id}/`} className="btn maidBtn">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card3 m-1">
                  {maid.location && maid.experience && maid.job_status ? (
                    <>
                      <p>Location : {maid.location}</p>
                      <p>Experience : {maid.experience}</p>
                      <p>
                        Job Status :{" "}
                        <span className="badge bg-primary">
                          {maid.job_status}
                        </span>{" "}
                      </p>
                    </>
                  ) : (
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="alert alert-danger mt-4">
                        Profile is incomplete at the moment!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome {user.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="row">
          <div className="col-md-6">
            <label htmlFor="picture" className="form-label">
              Profile picture
            </label>
            <input name="image" onChange={(e) => {handleImageChange(e)}} type="file" className="form-control" />
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input name="name" onChange={handleChange} type="text" className="form-control" placeholder="name" />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input name="email" onChange={handleChange} type="email" className="form-control" placeholder="email" />
            <label htmlFor="biography" className="form-label">
              Biography
            </label>
            <textarea
              name="bio"
              id=""
              cols="30"
              rows="4"
              className="form-control"
              onChange={handleChange}
            ></textarea>
             <label htmlFor="age" className="form-label">
              Age
            </label>
            <input name="age" onChange={handleChange} type="text" className="form-control" placeholder="age" />
          </div>
          <div className="col-md-6">
          <label htmlFor="age" className="form-label">
              Location
            </label>
            <input
              name="location"
              type="text"
              className="form-control"
              placeholder="location"
              onChange={handleChange}
            />
            <label htmlFor="fullname" className="form-label">
              Experience
            </label>
            <input
              name="experience"
              type="text"
              className="form-control"
              placeholder="experience"
              onChange={handleChange}
            />
            <label htmlFor="fullname" className="form-label">
              Contract
            </label>
            <select name="contract" onChange={handleChange} className="form-select form-control" aria-label="Default select example">
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
            </select>
            <label htmlFor="fullname" className="form-label">
              Job Status
            </label>
            <select name="job" onChange={handleChange} className="form-select form-control" aria-label="Default select example">
              <option value="1">Available</option>
              <option value="2">Unavailable</option>
            </select>
            <label htmlFor="maritalstatus" className="form-label">
              Marital Status
            </label>
            <input
              name="marital_status"
              type="text"
              className="form-control"
              placeholder="marital status"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="createBtn mt-3">Submit</button>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Maids;
