import React,{useState,useContext,useEffect} from "react";
import axios from "axios";
import { profile } from "./Auth/axios";
import { useNavigate,useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "../context/AuthContext";


const ProfileEdit = () => {
  const { user } = useContext(userContext)
    const { id } = useParams();
    const [formData,setFormData] = useState({
        image: '',
        name :'',
        email:'',
        bio:'',
        age:'',
        location:'',
        experience:'',
        contract:'',
        job_status:'',
        marital_status:'',
    })


    useEffect(() => {
      axios.get(`http://localhost:8000/api/${user.username}/profile/`).then((res) => {
        setFormData({
          ...formData,
          ["image"]: res.image,
          ["name"]: res.data.name,
          ["email"]: res.data.email,
          ["bio"]: res.data.bio,
          ["age"]: res.data.age,
          ["location"]: res.data.location,
          ["experience"]: res.data.experience,
          ["contract"]: res.data.contract,
          ["job_status"]: res.data.job_status,
          ["marital_status"]: res.data.marital_status,
        });
        console.log(res.data);
      });
    }, [setFormData]);


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

        axios.put(`http://localhost:8000/api/update/${id}/`, {
          image: formData.image,
          name: formData.name,
          email: formData.email,
          bio: formData.bio,
          age: formData.age,
          location: formData.location,
          experience: formData.experience,
          contract: formData.contract,
          job_status: formData.job_status,
          marital_status: formData.marital_status
        })
        .then((res) =>{
          toast.success('Profile updated successfully!')
        })
        .catch((err) =>{
          toast.error('Someting went wrong!')
          console.log(err.response.data);
        })
    }
  return (
    <div className="container">
      <ToastContainer />
      <div className="card2">
        <form className="row">
          <div className="col-md-6">
            <label htmlFor="picture" className="form-label">
              Profile picture
            </label>
            <input 
              value={formData.image}
              name="image" 
              onChange={(e) => {handleImageChange(e)}} type="file" className="form-control" />
              <label htmlFor="email" className="form-label">
              Name
            </label>
            <input 
               value={formData.name}
               name="name" 
               onChange={handleChange} type="text" className="form-control" placeholder="name" />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input 
               value={formData.email}
               name="email" 
               onChange={handleChange} type="email" className="form-control" placeholder="email" />
            <label htmlFor="biography" className="form-label">
              Biography
            </label>
            <textarea
              value={formData.bio}
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
            <input
               value={formData.age} 
               name="age" 
               onChange={handleChange} 
               type="text" className="form-control" placeholder="age" />
          </div>
          <div className="col-md-6">
          <label htmlFor="age" className="form-label">
              Location
            </label>
            <input
              value={formData.location}
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
              value={formData.experience}
              name="experience"
              type="text"
              className="form-control"
              placeholder="experience"
              onChange={handleChange}
            />
            <label htmlFor="fullname" className="form-label">
              Contract
            </label>
            <input
              value={formData.contract}
              name="contract"
              type="text"
              className="form-control"
              placeholder="full-time..."
              onChange={handleChange}
            />
            <label htmlFor="fullname" className="form-label">
              Job Status
            </label>
            <input
              value={formData.job_status}
              name="job_status"
              type="text"
              className="form-control"
              placeholder="available..."
              onChange={handleChange}
            />
            <label htmlFor="maritalstatus" className="form-label">
              Marital Status
            </label>
            <input
              value={formData.marital_status}
              name="marital_status"
              type="text"
              className="form-control"
              placeholder="marital status"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="createBtn mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
