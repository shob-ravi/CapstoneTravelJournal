import "./journals.css";
import { Link } from "react-router-dom";


export default function Journals({ lists }) {
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
    <div>
      <div>
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
                <button>Edit</button>
                </Link>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
