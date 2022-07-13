import "./style/Post.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import { Gif } from '../component/Gif';

export const Post = () => {
  const [state,setState] = useState(0)
  return (
    <div className="Post">
      <div className="navbar">
        <p> <BorderColorIcon/>Compose Post</p>
        <p> <PhotoLibraryIcon/> Photo/Video Album</p>
        <p> <VideoCallIcon/> Live Video</p>
      </div>
      <TextField
        sx={{ border: 1, width: 500 }}
        multiline
        rows={5}
        variant="standard"
        placeholder= "Write Something.."
        />
        
      <img src="" alt="" />
      <div className="but">
      <Button variant="contained" disableElevation>
      <PersonAddIcon/> Tag friends
      </Button>
      <Button variant="contained" disableElevation>
       <LocationOnIcon/>check in
      </Button>
      <Button variant="contained" disableElevation onClick={()=>{setState(1)}}>
       <GifBoxIcon/> gif
      </Button>
      <Button variant="contained" disableElevation>
      <CalendarMonthIcon/> Tag event
      </Button>
      </div>
      <div className="footer">
      <Button variant="contained" disableElevation sx={{}}>
      <LockIcon/> Only me
      </Button>
      <Button variant="contained" disableElevation>
       Post
      </Button>
      </div>
      {
        state?<Gif/>:""
      }
    </div>
  );
};
