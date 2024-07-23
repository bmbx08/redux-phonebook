import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {

    const [finalList,setFinalList]=useState([]);

    const contactList=useSelector(state=>state.contactList);
    const searchList=useSelector(state=>state.searchList);
    const searchedComplete=useSelector(state=>state.searched);

    useEffect(()=>{
        console.log(searchedComplete);
        if(searchedComplete===true){
            setFinalList(searchList);
        } else{
            setFinalList(contactList);
        }
    },[contactList,searchList])

  return (
    <div>
      <SearchBox/>
      {/* {contactList.map((contact)=>(
        <ContactItem contact={contact}/>
      ))}
      {searchList.map((contact)=>(
        <ContactItem contact={contact}/>
      ))} */}
      {finalList.map((contact)=>(
        <ContactItem contact={contact}/>
      ))}
    </div>
  )
}

export default ContactList
