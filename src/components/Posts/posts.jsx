import './posts.css';
import Post from '../Post/post.jsx';
import Post2 from '../Post2/post2.jsx';
import Post3 from '../Post3/post3.jsx';
import Post4 from '../Post4/post4.jsx';
function Posts(){
    return(
        
        <div className='posts'>
          <Post />
          <Post2 />
          <Post3 />
          <Post4 />
          
           
        </div>
    )  
   
};
export default Posts;