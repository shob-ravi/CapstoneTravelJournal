import './post3.css';
function Post3(){
    return(
        
        <div className='post3'>
          <img className="post3Img" 
          src="https://images.pexels.com/photos/10975803/pexels-photo-10975803.jpeg?auto=compress&cs=tinysrgb&w=600"          ></img>
          <div className="post3Info">
            <div className="post3Categories">
                <div className="post3Category">MUSIC</div>
                <div className="post3Category">LIFE</div>
            </div>
            <span className='post3Title'>
                Sonmarg,Kashmir
            </span>           
          </div>
          <p className='post3Desc'>
          Sonamarg, which means 'meadow of gold' has, as its backdrop, snowy mountains against a cerulean sky. The Sindh meanders along here and abounds with trout and mahseer, snow trout can be caught in the main river.
          </p>
        </div>
        
    )  
   
};
export default Post3;