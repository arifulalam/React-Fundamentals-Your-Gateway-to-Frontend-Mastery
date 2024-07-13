/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addNote } from "../features/NoteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const HandleAddNotes = (e) => {
    e.preventDefault();

    if (title != "" && content != "") {
      const note = {
        id: uuid(),
        title: title,
        content: content,
        createdAt: new Date().toString(),
      };

      dispatch(addNote(note));
      setTitle("");
      setContent("");
      toast.success("Note created successfully!");
    } else {
      toast.error("Please, add title and content to save");
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Note</title>
      </Helmet>
      <ToastContainer />
      <div className="container-full">
        <h1 className="text-2xl mb-10">Create Note...</h1>
        <form method="post">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="input input-bordered w-full mb-[30px]"
          />
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea input-bordered w-full mb-[30px]"
            rows="8"
            placeholder="Note"
          ></textarea>
          <br />
          <button onClick={HandleAddNotes} className="btn btn-primary w-full">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
