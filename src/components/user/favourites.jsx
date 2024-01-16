import "../../styles/fav.css"
const Favourites = ({cart,setCart}) => {
    return ( 
        <div className="books">
        <div className="book">
            {cart.map(data=>(
                <div id="hiii">
                    <div id="bcard1"><img width={200} src={(data).thumbnailUrl} alt="" />
                            <div>{(data).title}
                                <div>{(data).authors}</div>
                                <div>{(data).categories}</div>
                                <div>{(data).pageCount}</div>
                               
                            </div>
                        </div>
                  
                </div>
            ))}
        </div>
        </div>
     );
}
 
export default Favourites;  