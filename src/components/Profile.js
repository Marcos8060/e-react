import React, { useContext, useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { userContext } from "../context/AuthContext";
import "../assets/css/profile.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { AiFillHome } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileEdit from "./ProfileEdit";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      background: "#EE7E28",
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Profile() {
  const { id } = useParams();
  const { user, userLogout } = useContext(userContext);
  const [profile, setProfile] = useState([]);

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/${user.username}/profile/`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          style={{ backgroundColor: "#17224D", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {user && <p>Welcome {user.username}</p>}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Home", "Logout"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Link to="/">
                      <AiFillHome className="sideIcons" />
                    </Link>
                  ) : (
                    <RiLogoutBoxLine
                      onClick={userLogout}
                      className="sideIcons"
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main
          style={{ backgroundColor: "white", color: "#17224D" }}
          className={classes.content}
        >
          <div className={classes.toolbar} />
          <div className="container-fluid">
            <div className="row profileCard">
              <div className="col-md-2">
                <img
                  className="img-fluid profileImg"
                  src={profile.image}
                  alt=""
                />
                <Link to="/edit" className="editBtn btn mt-4">
                  Edit Profile
                </Link>
              </div>
              <div className="col-md-4 card1">
                <h3>{profile.name}</h3>
                <p>
                  <span className="badge bg-primary">Software Engineer</span>
                </p>
                <h4>About</h4>
                <span>{profile.bio}</span>
              </div>
              <div className="col-md-5 card1 text-center">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Experience</h5>
                    <p>{profile.experience} years.</p>
                    <h5>Contract</h5>
                    <p>{profile.contract}</p>
                  </div>
                  <div className="col-md-6">
                    <h5>Location</h5>
                    <p>{profile.location}</p>
                    <h5>Age</h5>
                    <p>{profile.age}</p>
                    <h5>Member since</h5>
                    <p>{profile.date_joined}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card1">
                  <h5>Personal Information</h5>
                  <p>Email : {profile.email}</p>
                  <p>Age : {profile.age}</p>
                  <p>Marital Status : {profile.marital_status}</p>
                  <p>
                    Job status:{" "}
                    <span className="badge bg-primary">
                      {profile.job_status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ProfileEdit />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
