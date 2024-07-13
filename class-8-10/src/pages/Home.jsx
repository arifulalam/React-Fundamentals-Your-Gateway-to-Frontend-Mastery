/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { removeNote, updateNote } from "../features/NoteSlice";
import UpdateNote from "../components/navbar/updateNote";

const Home = () => {
  const perLoad = 3;
  const [next, setNext] = useState(perLoad);
  const [isUpdate, setIsUpdate] = useState(false);

  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const [note, setNote] = useState(null);

  const handleDelete = (id) => {
    dispatch(removeNote(id));
  };

  const handleLoadMore = () => {
    setNext((next) => next + perLoad);
  };

  const handleUpdateModal = (note) => {
    setIsUpdate(true);
    setNote(() => note);
  };

  if (isUpdate) {
    return (
      <UpdateNote
        setIsUpdate={setIsUpdate}
        note={note}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <h1 className="text-2xl text-pretty text-red-950 font-bold">
          .::NOTES::.
        </h1>
        <div className="container-full text-left">
          {notes.length <= 0 ? "No notes found." : ""}
          {notes?.slice(0, next).map((note) => {
            const date = new Date(note.createdAt);
            let createdAt = moment(date, "YYYYMMDD").fromNow();
            return (
              <div key={note.id}>
                <fieldset className="border-spacing-5 border-separate border-2 border-cyan-500 p-5 mt-10">
                  <legend className="border text-blue-900 text-3xl p-2">
                    <Link to={`/note/${note.id}`}>{note.title}</Link>
                  </legend>
                  <p>{note.content}</p>
                  <div className="flex justify-between place-items-stretch clear-both">
                    <p className="badge badge-ghost p-2 mt-10">{createdAt}</p>
                    <div className="mt-10 p-2">
                      <div className="join">
                        <button
                          className="btn btn-sm join-item bg-orange-400 text-white"
                          onClick={() => handleUpdateModal(note)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-sm join-item bg-red-600 text-white"
                          onClick={() => handleDelete(note.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            );
          })}
          <div className="text-center">
            {notes.length > next ? (
              <button className="btn btn-accent mt-3" onClick={handleLoadMore}>
                Load More
              </button>
            ) : (
              ""
            )}
            {
              //Following is a working method
              /*
              isUpdate && (
                <UpdateNote/>
              )
              */
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
