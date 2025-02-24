export default function Journals({lists}){
    console.log('lists'+lists?.length)
    return (
        
        <div className="journals">
          {lists?.map((list,index) => {
            
            return (
              <div className="Booklist" key={index} >
                {/* <Link to={`./Categories/BookDetails/${book.key.replace("/works/","")}`}> */}
                <h3> {list.Title}</h3>
                <h3> {list.Description}</h3>
                <img src={list.ImageURL}  width="50%"/>
                <p>{list.Location}</p>
                {/* </Link> */}
              </div>
            );
          })}
        </div>
      );

}