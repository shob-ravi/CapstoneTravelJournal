import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
        <p>
        Hey, I’m Shobana! Welcome to my travel journal. I’m all about exploring new places, whether they’re close by or across the world. 
        I love doing my own research—it’s part of the fun! Follow along as I share my travel adventures and the little things that make each trip awesome.
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
