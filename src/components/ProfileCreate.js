import React,{useState} from "react";
import axios from "axios";
import { profile } from "./Auth/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ProfileCreate = () => {
    const history = useNavigate();
    const [formData,setFormData] = useState({
        image: '',
        full_name:'',
        email:'',
        bio:'',
        age:'',
        location:'',
        experience:'',
        contract:'',
        job:'',
        marriage:''
    })

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
        form_data.append("full_name", formData.full_name);
        form_data.append("user", formData.user);
        form_data.append("email", formData.email);
        form_data.append("age", formData.age);
        form_data.append("location", formData.location);
        form_data.append("experience", formData.experience);
        form_data.append("bio", formData.bio);

        axios.post(profile, form_data,{
            headers:{
               'content-type': 'multipart/form-data' 
            }
        })
        .then((res) =>{
            console.log('post is successful');
            toast.success('Your profile is created successfully!')
            history('/profile')
        })
        .catch((err) =>{
            console.log(err.response.status);
            toast.error('There is a problem!')
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
            <input name="image" onChange={(e) => {handleImageChange(e)}} type="file" className="form-control" />
            <label htmlFor="fullname" className="form-label">
              FullName
            </label>
            <input
               name="full_name"
              type="text"
              className="form-control"
              placeholder="fullname"
              onChange={handleChange}
            />
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
          </div>
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input name="age" onChange={handleChange} type="text" className="form-control" placeholder="age" />
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
              name="marriage"
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

export default ProfileCreate;
