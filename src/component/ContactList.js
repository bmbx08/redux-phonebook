import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

const ContactList = () => {

    const [finalList,setFinalList]=useState([]);

    const contactList=useSelector(state=>state.contactList);
    const keyword=useSelector(state=>state.keyword);

    useEffect(()=>{
        if (keyword !== "") {
            let list = contactList.filter((item) => item.name.includes(keyword));
      
            setFinalList(list);
          } else {
            setFinalList(contactList);
          }
        }, [keyword, contactList]);

  return (
    <div>
      <SearchBox/>
      {/* {contactList.map((contact)=>(
        <ContactItem contact={contact}/>
      ))}
      {searchList.map((contact)=>(
        <ContactItem contact={contact}/>
      ))} */}
      <Row>
        {finalList.map((contact)=>(
          <Col lg={3}>
          <ContactItem contact={contact}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ContactList
