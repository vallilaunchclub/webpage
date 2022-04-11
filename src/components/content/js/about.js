import "../styles/about.scss";
function about () {
    return(
      <div className="about-page">
        <div className="contact-info">
          <div className="title">CONTACT INFORMATION</div>
          <table className="details">
            <tr>
              <td className="label">Phone:</td>
              <td className="value">+1 123 456 7890</td>
            </tr>
            <tr>
              <td className="label">Address:</td>
              <td className="value" style={{color:  'rgb(102, 102, 102)'}}>
                <p>525 E 68th Street</p>
                <p>New York, NY 10051-78-156-187-60</p>
              </td>
            </tr>
            <tr >
              <td className="label">Email:</td>
              <td className="value">hello@jermeyrose.com</td>
            </tr>
            <tr>
              <td className="label">Site:</td>
              <td className="value">www.jermeyrose.com</td>
            </tr>
          </table>
        </div>

        <div className="basic-info">
          <div className="title">BASIC INFORMATION</div>
          <table className="details">
            <tr>
              <td className="label">Birthday:</td>
              <td className="value1">June 5, 1992</td>
            </tr>
            <tr>
              <td className="label">Gender:</td>
              <td className="value1">Male</td>
            </tr>
          </table>
        </div>
    </div>
  );
};

export default about;