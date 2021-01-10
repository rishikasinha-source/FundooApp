import React from "react";
import "./AddNote.css";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import IconButton from "@material-ui/core/IconButton";
import AddAlertIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import NoteOptions from "../NoteOptions/NoteOptions.jsx";
import NotesService from '../../Services/notesService.js'


const service=new NotesService();
const useStyles = makeStyles(() => ({
  titleInput: {
    padding: "10px 15px",
    width: "70%",
  },
  noteInput: {
    padding: "10px 15px",
  },
  input: {},
}));

function TitleNote() {
  const classes = useStyles();
  return (
    <div className="titleInput" className={classes.titleInput}>
      <InputBase className={classes.input} placeholder="Title" />
    </div>
  );
}

export default function AddNotes() {
  const classes = useStyles();
  var [showTitle, titleDisplay] = React.useState(false);
//   var[title, setTitle] = React.useState();
  var[note, setNote] = React.useState();
  const [open, setOpen ] = React.useState(true);
  const [clr, setClr] = React.useState(`#fff`);
  const [title, setTitle] = React.useState('');
  const[description, setDescription] = React.useState('');

const handleClick = () => {
    setOpen(!open);
    saveNote();
}

  const saveNote = () => {
      if(title !== '') {
          let noteData = {
              'title' : title,
              'description': description,
              'color': clr
          }
          service.saveNotes(noteData, localStorage.getItem("userToken")).then(result => {
              console.log(result);
          }).catch((error) => {
              console.log(error);
          });
          reset();
      };
  }

  const reset = () => {
      setClr('#fff');
      setTitle('');
      setDescription('');

  }
 
  const setColor = (color) => {
    console.log(color);
    setClr(color);
  };

  const clickedNote = () => {
    titleDisplay(true);
  };

  const closeNote = () => {
    titleDisplay(false);
  };

  return (
    <div className="addNotesMain" style={{ backgroundColor: clr }}>
      <div className="notesField" onClick={clickedNote}>
        <div
          className="addNoteField"
          style={{ display: showTitle ? "block" : "none" }}
        >
          <TitleNote />
        </div>
        <div class="simpleNoteShow">
          <div className="addNoteField" className="noteInput">
            <InputBase className={classes.input} placeholder="Take a note..." />
          </div>
          <div style={{ display: showTitle ? "none" : "block" }}>
            <IconButton><CheckBoxOutlinedIcon /></IconButton>
            <IconButton><BrushOutlinedIcon /> </IconButton>
            <IconButton> <ImageOutlinedIcon /> </IconButton>
          </div>
        </div>
      </div>
      <div
        className="addNoteField"
        style={{ display: showTitle ? "block" : "none" }}
      >
        <div className="addNoteOptions">
          {/* <div className="optionButton">
            <IconButton><AddAlertIcon /></IconButton>
            <IconButton><PersonAddIcon /></IconButton>
            <IconButton><ColorLensOutlinedIcon /></IconButton>
            <IconButton><ImageOutlinedIcon /></IconButton>
            <IconButton><SystemUpdateAltOutlinedIcon /></IconButton>
            <IconButton><MoreVertOutlinedIcon /></IconButton>
          </div> */}
          <div className="addNoteOptions">
          <NoteOptions setColor={setColor}/>
          </div>
          <div className="closeNotes" onClick={closeNote}>
            CLOSE
          </div>
        </div>
      </div>
    </div>
  );
}