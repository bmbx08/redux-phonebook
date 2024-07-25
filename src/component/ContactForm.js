import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [gender,setGender]=useState("Male");
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    let ID='_' + Math.random().toString(36).substr(2, 9);
    dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber,gender,ID}}); // payload:{name:name, phoneNumber:phoneNumber}과 같음
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
        <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
            id={`Male`}
            onChange={(event)=>setGender(event.target.id)}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id={`Female`}
            onChange={(event)=>setGender(event.target.id)}
          />
        </div>
        

        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;