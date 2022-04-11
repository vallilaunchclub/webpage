import "../styles/image.scss";
import ProfilePic from '../../../assets/picture.png'

const Image = () => {
  return (
    <div className="sidebar-image">
      <img src={ ProfilePic } alt='profile-pic' />
    </div>
  );
};

export default Image;
