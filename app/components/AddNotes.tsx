"use client"
import { useState } from 'react';
import {
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

type Note = {
  id: string;
  note: string;
}

const maxNotes = 10;
const maxNoteLength = 120;

export default function AddNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <>
      <InputLabel>Add notes ({maxNoteLength} character max)</InputLabel>
      {notes.map((note) => (
        <TextField
          id={note.id}
          name={`note-${note.id}`}
          key={note.id}
          defaultValue={note.note}
          // Add a remove button to the end of the text field
          InputProps={{
            endAdornment: <InputAdornment
              position="end"
              onClick={() => setNotes(notes.filter((n) => n.id !== note.id))}
              sx={{cursor: 'pointer'}}
            >
              <RemoveCircleOutlineIcon fontSize='large' />
            </InputAdornment>,
          }}
          // Limit the length of the note to maxNoteLength
          onChange={(e) => {
            if (e.target.value.length > maxNoteLength) {
              e.target.value = e.target.value.slice(0, maxNoteLength);
            }
            return e;
          }}
        />
      ))}
      {/* Button to add a new empty string to the notes which will add a new text field with a basic unique ID */}
      <AddBoxRoundedIcon 
        fontSize="large" 
        onClick={() => {
          if (notes.length < maxNotes) {
            setNotes([
              ...notes,
              {
                id: (Date.now() * Math.random()).toString(),
                note: ''
              }
            ])
          }
        }}
        sx={{cursor: 'pointer'}}
      />
    </>
  )
}