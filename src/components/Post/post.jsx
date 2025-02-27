import './post.css';
function Post(){
    return(
        
        <div className='post'>
          <img className="postImg" 
          src="https://images.pexels.com/photos/54514/pexels-photo-54514.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
          <div className="postInfo">
            
            <span className='postTitle'>
                Masaimara
            </span>           
          </div>
          <p className='postDesc'>
          Masai Mara lions are strong, sociable, and majestic predators that live in prides in the Masai Mara National Reserve in Kenya. 
          </p>
        </div>
        
    )  
   
};
export default Post;