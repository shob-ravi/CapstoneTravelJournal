import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
        <p>
          Welcome to my travel Journal,I Love Traveling. I’m Shobana, writing
          about my visits to countries near and far. I research destinations
          myself and that’s part of the fun
        </p>
      </div>
      <div className="sidebarItem"></div>
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarlist">
        <li className="sidebarlistItem">LIFE</li>
        <li className="sidebarlistItem">MUSIC</li>
        <li className="sidebarlistItem">HOBBIES</li>
        <li className="sidebarlistItem">MOVIES</li>
      </ul>
    </div>
  );
}
export default SideBar;
