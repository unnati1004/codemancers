import "./style/Post.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GifBoxIcon from '@mui/icons-material/GifBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { width } from "@mui/system";
export const Post = () => {
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
      <Button variant="contained" disableElevation>
       <GifBoxIcon/> gif
      </Button>
      <Button variant="contained" disableElevation>
      <CalendarMonthIcon/> Tag event
      </Button>
      </div>
    </div>
  );
};
