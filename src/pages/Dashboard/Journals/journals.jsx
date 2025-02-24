import "./journals.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateJournal from "../../CreateJournal/createjournals";

export default function Journals({ lists }) {
  const [createJournalPage, setJournalPage] = useState(false);
  function handleClick() {
    setJournalPage(true);
  }
  console.log("lists" + lists?.length);
  return (
    <div className="journals">
      <Link to="/journal">
        <button className="icon-button" onClick={handleClick}>
          <i className="bx bx-plus"></i>
        </button>
      </Link>
      {lists?.map((list, index) => {
        return (
          <div className="stories" key={index}>
            <h3> {list.Title}</h3>
            <h3> {list.Description}</h3>
            <img src={list.ImageURL} width="30%" />
            <p>{list.Location}</p>

            {/* Replaces the UI with CreateJournal when clicked */}
            {createJournalPage && <CreateJournal />}
          </div>
        );
      })}
    </div>
  );
}
