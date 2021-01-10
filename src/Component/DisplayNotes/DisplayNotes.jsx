import React from 'react';
import NoteOptions from "../NoteOptions/NoteOptions.jsx";
import AddNote from "../AddNote/AddNote";
import './DisplayNotes.css';


export default function DisplayNotes(props) {

    return (
        <div className="displayNotes">
        {props.NoteList.map((item) =>(
            <div className='addNotesMain' style={{ backgroundColor: item.color }}>
            <div>
            {item.title}
            </div>
            <div>
            {item.description}
            </div>
            <div>
            <NoteOptions/>
            </div>
            </div>
        ))}
        </div>
    )
}


