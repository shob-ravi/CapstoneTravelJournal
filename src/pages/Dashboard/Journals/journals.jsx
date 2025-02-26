import "./journals.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Journals({ lists }) {
  const nav = useNavigate();
  const [deletedata, setdeletedata] = useState([]);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this journal?")) {
      console.log(`Deleting item with ID: ${id}`);
      try {
        console.log("Before Updated Lists" + lists.length);
        let res = await axios.delete(`http://localhost:3000/api/journal/${id}`);
        const results = res.data;
        console.log("results delete" + results);
        setdeletedata(lists.filter((test) => test._id !== id));
        console.log("After Updated Lists" + lists.length);
      } catch (error) {
        console.error(error);
      }
      // useEffect(()=>{
      //   setdeletedata(true)
      // },[deletedata])
      // nav("/dashboard");
    }
  };

  // const nav = useNavigate();
  // const [editFormData, setFormData] = useState({
  //   Title: "",
  //   Description: "",
  //   Location: "",
  // });
  // function handleClick(e) {
  //   // setFormData({ ...editFormData, [e.target.name]: e.target.value });
  //   nav("/updateJournal/")
  //   console.log("editFormData:" + editFormData);
  // }
  // console.log("lists" + lists?.length);
  return (
    <div className="wrapper">
      <div className="addBtn">
        <Link to="/journal">
          <button className="icon-button">
            <i className="bx bx-plus"></i>
          </button>
        </Link>
      </div>
      <div className="journals">
        {/* Replaces the UI with CreateJournal when clicked
      {createJournalPage && <CreateJournal />} */}

        {lists?.map((list, index) => {
          return (
            <div className="card" key={list._id}>
              <h3> {list.Title}</h3>
              <img src={list.ImageURL} className="journalImage" />
              <div className="container">
                <h3> {list.Description}</h3>
                <p>{list.Location}</p>
                <Link to={`/updateJournal/${list._id}`}>
                  <button className="btnEdit">Edit</button>
                </Link>
                <button
                  className="btnDelete"
                  onClick={() => handleDelete(list._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
