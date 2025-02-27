import './post.css';
function Post(){
    return(
        
        <div className='post'>
          <img className="postImg" 
          src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
          <div className="postInfo">
            {/* <div className="postCategories">
                <div className="postCategory">MUSIC</div>
                <div className="postCategory">LIFE</div>
            </div> */}
            <span className='postTitle'>
                posttitle posttitle
            </span>           
          </div>
          <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque, nostrum dolore eligendi eos minima.
          </p>
        </div>
        
    )  
   
};
export default Post;