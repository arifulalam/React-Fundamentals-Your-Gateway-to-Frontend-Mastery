/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom'
import store from "../features/store";
import moment from "moment";

const Note = () => {
  const params = useParams();
  console.log(params.id);
  const notes = store.getState().note.notes;
  const note = notes.find((note) => note.id == params.id);
  
  //setNote(() => notes.filter((note) => note.id == params.id));
    
  console.log(note);
  return (
    <>
      <Helmet>
        <title>{note.title}</title>
      </Helmet>
      <div className="text-left">
        <h2 className="text-2xl font-bold">{note.title}</h2>
        <span><em>{moment(new Date(note.createdAt), "YYYYMMDD").fromNow()}</em></span>
        <p className="mt-3">{note.content}</p>
      </div>
    </>
  );
};

export default Note;
