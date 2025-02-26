import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth/auth_context";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './updatejournal.css';
import axios from "axios";
export default function UpdateJournal(){
    const { cookies} = useAuth();
    const {_id} = useParams();
    const nav = useNavigate(); //Initializing useNavigate into a variable
    const [updateJournalData, setUpdateJournalData] = useState({
    Title: "",
    Description: "",
    Image: null,
    Location: "",
  });

  async function updateJournals() {
    try {
        console.log('_id'+_id);
      const url =`http://localhost:3000/api/journal/${_id}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-auth-token": cookies.token, // Include token in request
          "Content-Type": "application/json",
        },
      });
      const results = await res.json();
      console.log("Get_Results" + JSON.stringify(results));
      if (results) {
        setUpdateJournalData(results);
      }
    } catch (error) {
      console.error("Error showing dashboard", error);
    }
  }
  useEffect(() => {
    updateJournals();
    }, []);

      async function handleSubmit(e) {
        e.preventDefault();
        console.log('updateJournalData.ImageURL'+updateJournalData[0].ImageURL);
        console.log('updateJournalData.Title'+updateJournalData[0].Title);
        console.log('updateJournalData.description'+updateJournalData[0].Description)
        const isRequired =
        updateJournalData.Title === "" ||
        updateJournalData.Description === "" ||
        updateJournalData.Location === "" ||
        updateJournalData.Image === null;
    
        if (isRequired) {
          alert("One or more fields are missing");
          return;
        }
        
    
        try {
          let res = await axios.patch(
            `http://localhost:3000/api/journal/${_id}`,
            updateJournalData[0],
            {
              headers: {
                "x-auth-token": cookies.token, // Include token in request
                // "Content-Type": "multipart/form-data", // Important for file uploads
              },
            }
          );
    
          console.log("Update_results" + res.data);
          // take token from response and set to cookies
          // setCookies('token',res.data.token);
        } catch (error) {
          console.error(error);
        }
        nav("/dashboard");
      }
    
      function handleChange(e) {
        
        // setUpdateJournalData({ ...updateJournalData, [e.target.name]: e.target.value });
        setUpdateJournalData(updateJournalData.length ? [{ ...updateJournalData[0], [e.target.name]: e.target.value }] : updateJournalData);

      }
      function handleImageChange(e) {
        const file = e.target.files[0];
        console.log("file" + file);
        console.log('updateJournalData[0]?.ImageURL'+updateJournalData[0].ImageURL)

        if (file) {
            // Ensure the file is correctly selected
            setUpdateJournalData((prevData) => {
              if (prevData.length) {
                // Replace the ImageURL in the first object
                return [{ ...prevData[0], ImageURL: file }];
              } else {
                return prevData; // If no data exists, keep the previous state unchanged
              }
            });
          } else {
            console.log("No file selected");
          }

        // if (file) {
        //     console.log('updateJournalData'+JSON.stringify(updateJournalData[0]));
        //     // setUpdateJournalData({ ...updateJournalData, Image: file });
        //     setUpdateJournalData(updateJournalData.length ? [{ ...updateJournalData[0], Image: file }] : updateJournalData);

        // //   setFilePath(file);
        // }
      }

      if (!updateJournalData) return <p>Loading...</p>;

    return(<>
    <div className="updatejournalpage">
    <div className="updatejournalWrapper">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="inputBox">
            <label>Title</label>
            <input
              type="text"
              id="title"
              name="Title"
              placeholder="Title"  
              value={updateJournalData[0]?.Title || ""}            
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
              value={updateJournalData[0]?.Description || ""} 
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
            {updateJournalData[0]?.ImageURL ? (
              <div>
                
                <p>Image Preview</p>
                <img
                  src={typeof updateJournalData[0]?.ImageURL === "string" 
                    ? updateJournalData[0]?.ImageURL // If it's a URL from API
                    : URL.createObjectURL(updateJournalData[0]?.ImageURL)} // If it's a file from input
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
              value={updateJournalData[0]?.Location || ""} 
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Journal</button>
        </form>
      </div>
      </div>
    </>)
}