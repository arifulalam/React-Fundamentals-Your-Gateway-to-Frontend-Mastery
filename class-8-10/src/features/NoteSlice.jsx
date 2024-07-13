/* eslint-disable no-unused-vars */
import {createSlice} from "@reduxjs/toolkit"

//localStorage.clear();

const initialState = {
    notes: []
}

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    initialState.notes = notes;
}

// eslint-disable-next-line react-refresh/only-export-components
const NoteSlice = createSlice({
    name: "note",
    initialState: initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload];
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id != action.payload);
            localStorage.setItem('notes', JSON.stringify(state.notes));
        },
        updateNote: (state, action) => {
            const { id, title, content, createdAt } = action.payload;
            let note = state.notes.find((note) => note.id == id)
            if(note){
                note.title = title;
                note.content = content;
                note.createdAt = createdAt;
                localStorage.setItem('notes', JSON.stringify(state.notes));
            }
        },
        getNote: (state, action) => {
            const note = state.notes.find((note) => note.id == action.payload);
            return note;
        }
    }
});

export const {addNote, removeNote, updateNote, getNote} = NoteSlice.actions;
export default NoteSlice.reducer;