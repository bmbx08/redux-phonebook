import React, {useState} from "react";
import fav from "../images/fav.png"
import fav2 from "../images/fav2.png";
import nofav from "../images/nofav.png";
import phone from "../images/phone.png";
import message from "../images/message.png";

const ContactItem = ({contact}) => {
  const [fav, setFav] = useState(false);

  const favorite = (event) => {
    console.log("favorite");
    console.log("ID", event.target.id);
    setFav(!fav);
    // dispatch({type: "SET_FAVORITE", payload: {name, phoneNumber,gender,randomID}});
  };

  return (
    <div className="contact-box">
      {/* <img onClick={(event)=>favorite(event)} id={contact.ID} className="no-fav" width={35}src={nofav}/> */}
      {fav === false ? (
        <img
          onClick={(event) => favorite(event)}
          id={contact.ID}
          className="no-fav"
          width={35}
          src={nofav}
        />
      ) : (
        <img
          onClick={(event) => favorite(event)}
          id={contact.ID}
          className="fav"
          width={35}
          src={fav2}
        />
      )}
      {contact.gender === "Male" ? (
        <img
          width={80}
          src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
        />
      ) : (
        <img
          width={80}
          height={80}
          src="https://static.vecteezy.com/system/resources/previews/003/543/446/non_2x/woman-icon-for-picture-profile-female-icon-human-or-people-sign-and-symbol-for-template-design-free-vector.jpg"
        />
      )}
      <h5 className="contact-name">{contact.name}</h5>
      <h6 className="contact-number">{contact.phoneNumber}</h6>
      <img className="contact-icon phone-icon" width={27} src={phone} />
      <img className="contact-icon message-icon" width={27} src={message} />
    </div>
  );
};

export default ContactItem;
