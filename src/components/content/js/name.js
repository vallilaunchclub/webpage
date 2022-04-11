import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/name.scss";

const name = () => {
  return (
    <div className="person-details">
      <div className="name">
        <h1>Jeremey Rose</h1>
        <p>Product Designer</p>
      </div>
      <div className="location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> <span className="location-city"><span className="city-name">New York</span>, <span className="city-code">NY</span> </span>
      </div>
      <div className="book">
        <FontAwesomeIcon icon={faBookmark} className="bookmark" /> <span className="book-text"> Bookmark </span>
      </div>
    </div>
  );
};
export default name;
