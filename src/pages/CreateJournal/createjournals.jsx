import { useAuth } from "../../context/auth/auth_context";
import { useState } from "react";
import "./createjournal.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateJournal() {
  const { cookies } = useAuth();
  const nav = useNavigate(); //Initializing useNavigate into a variable
  const [createJournalData, setJournalData] = useState({
    Title: "",
    Description: "",
    Image: null,
    Location: "",
  });
//   const [filePath, setFilePath] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('createJournalData.ImageURL'+createJournalData.Image);
    const isRequired =
      createJournalData.Title === "" ||
      createJournalData.Description === "" ||
      createJournalData.Location === "" ||
      createJournalData.Image === null;

    if (isRequired) {
      alert("One or more fields are missing");
      return;
    }
    

    try {
      let res = await axios.post(
        "http://localhost:3000/api/journal",
        createJournalData,
        {
          headers: {
            "x-auth-token": cookies.token, // Include token in request
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      console.log("results" + res.data);
      // take token from response and set to cookies
      // setCookies('token',res.data.token);
    } catch (error) {
      console.error(error);
    }
    nav("/dashboard");
  }

  function handleChange(e) {
    setJournalData({ ...createJournalData, [e.target.name]: e.target.value });
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    console.log("file" + JSON.stringify(file));
    if (file) {
      setJournalData({ ...createJournalData, Image: file });
    //   setFilePath(file);
    }
  }
  return (
    <>
      <div className="journalWrapper">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="inputBox">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="Title"
              placeholder="Title"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label>Description</label>
            <input
              type="text"
              id="description"
              name="Description"
              placeholder="description"
              onChange={handleChange}
            />
          </div>
          <div className="inputBox">
            <label>Upload Image</label>
            <input
              type="file"
              id="image"
              name="ImageURL"
              accept="image/*"
              placeholder="description"
              onChange={handleImageChange}
            />
            {createJournalData.Image ? (
              <div>
                <p>Image Preview</p>
                <img
                  src={URL.createObjectURL(createJournalData.Image)}
                  width="200px"
                />
              </div>
            ) : (
              <p>No image seleceted</p>
            )}
          </div>
          <div className="inputBox">
            <label>Location</label>
            <input
              type="text"
              id="location"
              name="Location"
              placeholder="location"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Create Journal</button>
        </form>
      </div>
    </>
  );
}
