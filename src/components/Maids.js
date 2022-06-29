import React,{useEffect, useState} from 'react'
import image from '../assets/images/clean.jpg'
import { Link } from 'react-router-dom'
import SearchBar from "material-ui-search-bar";
import { useNavigate } from 'react-router-dom';
import '../assets/css/maids.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { maids } from './Auth/axios';
import axios from 'axios';

const Maids = () => {
  const history = useNavigate();
  const [data, setData] = useState({ search: "" });
  const [people,setPeople] = useState([])


      // search function
  const goSearch = (e) => {
    history({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };

  useEffect(() =>{
    axios.get(maids)
    .then((res) =>{
        console.log(res.data);
        setPeople(res.data)
    })
    .catch((err) =>{
        console.log(err.response.status);
    })
  },[])

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
                { people.map((maid)=>(
                    <div className="col-md-3 text-center">
                    <div className="card1 mb-3">
                        <img className='img-fluid maidImg' src={maid.image} alt="" />
                        <h5>{maid.fullname}</h5>
                        <hr />
                        <p>Contract : {maid.contract}</p>
                        <Link to='/profile' className='btn createBtn'>View Profile</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Maids