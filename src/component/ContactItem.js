import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({contact}) => {
  return (
    <div className='contact-item'>
      <Row>
        <Col lg={2}>
            <img width={80} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
        </Col>
        <Col lg={10}>
            <h5>
                {contact.name}
            </h5>
            <h5>
                {contact.phoneNumber}
            </h5>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem