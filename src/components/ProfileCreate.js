import React from "react";

const ProfileCreate = () => {
  return (
    <div className="container">
      <div className="card2">
        <form className="row">
          <div className="col-md-6">
            <label htmlFor="picture" className="form-label">
              Profile picture
            </label>
            <input type="file" className="form-control" />
            <label htmlFor="fullname" className="form-label">
              FullName
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="fullname"
            />
            <label htmlFor="fullname" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" placeholder="email" />
            <label htmlFor="biography" className="form-label">
              Biography
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              className="form-control"
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="fullname" className="form-label">
              Age
            </label>
            <input type="text" className="form-control" placeholder="age" />
            <label htmlFor="fullname" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
            <label htmlFor="fullname" className="form-label">
              Experience
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="experience"
            />
            <label htmlFor="fullname" className="form-label">
              Contract
            </label>
            <select class="form-select form-control" aria-label="Default select example">
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
            </select>
            <label htmlFor="fullname" className="form-label">
              Job Status
            </label>
            <select class="form-select form-control" aria-label="Default select example">
              <option value="1">Available</option>
              <option value="2">Unavailable</option>
            </select>
            <label htmlFor="maritalstatus" className="form-label">
              Marital Status
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="marital status"
            />
            <button className="createBtn mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCreate;
