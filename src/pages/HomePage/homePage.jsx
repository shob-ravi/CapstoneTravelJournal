import { Link } from 'react-router-dom';
import Posts from '../../components/Posts/posts.jsx';
import SideBar from '../../components/SideBar/sidebar.jsx';
import Header from '../../components/Header/header.jsx';
import './homePage.css';
export default function HomePage() {
  return (
    <>
    <Header/>  
    <div className="home">  
    <Posts />
    <SideBar />
    </div>
    </>
  );
}
