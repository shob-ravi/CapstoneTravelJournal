import "./journals.css";
import { Link } from "react-router-dom";

export default function Journals({ lists }) {
  // const [createJournalPage, setJournalPage] = useState(false);
  // function handleClick() {
  //   setJournalPage(true);
  // }
  console.log("lists" + lists?.length);
  return (
    <div>
      <Link to="/journal">
        <button className="icon-button" >
          <i className="bx bx-plus"></i>
        </button>
      </Link>
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
            </div>          
          </div>
        );        
      })}      
    </div>
    </div>
  );
}
