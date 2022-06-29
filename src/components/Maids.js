import React,{useState} from 'react'
import image from '../assets/images/clean.jpg'
import { Link } from 'react-router-dom'
import SearchBar from "material-ui-search-bar";
import { useNavigate } from 'react-router-dom';
import '../assets/css/maids.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Maids = () => {
  const history = useNavigate();
  const [data, setData] = useState({ search: "" });


      // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

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
            <div className="row" style={{ marginTop: '7vh',marginBottom:'7vh'}}>
                <div className="col-md-3">
                    <div className="card1 mb-3">
                        <img className='img-fluid' src={image} alt="" />
                        <h5>Marcos Ochieng</h5>
                        <hr />
                        <p>Contract : Full Time</p>
                        <Link to='/profile' className='btn createBtn'>View Profile</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card1 mb-3">
                        <img className='img-fluid' src={image} alt="" />
                        <h5>Marcos Ochieng</h5>
                        <hr />
                        <p>Contract : Full Time</p>
                        <Link to='/profile' className='btn createBtn'>View Profile</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card1 mb-3">
                        <img className='img-fluid' src={image} alt="" />
                        <h5>Marcos Ochieng</h5>
                        <hr />
                        <p>Contract : Full Time</p>
                        <Link to='/profile' className='btn createBtn'>View Profile</Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card1 mb-3">
                        <img className='img-fluid' src={image} alt="" />
                        <h5>Marcos Ochieng</h5>
                        <hr />
                        <p>Contract : Full Time</p>
                        <Link to='/profile' className='btn createBtn'>View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Maids