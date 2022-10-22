import NYCRestaurants from "./data.json";
import "./Restaurantsdata.css";
function Restaurantsdata() {
  return (
    <div class="bigBox" >
      {console.log(NYCRestaurants)}
      {NYCRestaurants[0].businesses.map(data => {
        return (
          <div class="box"key={data.id}>
            <h2>{data.name}</h2><br></br>
            <img src={data.image_url}></img>
            <h3>Rating:{data.rating}</h3>
            <h3>Phone:{data.display_phone}</h3>
            <br></br>

          </div>
        );
      })}
    </div>
    );
}

export default Restaurantsdata;