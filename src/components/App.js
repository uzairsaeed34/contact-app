import React, {useState, useEffect}from "react";
import {Helmet} from "react-helmet";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from "./AddContacts";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  const [contacts,setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="ui container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact App</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Contact App" />
            </Helmet>
      <h2>
        AddContact
      </h2>
        <Header />
        <AddContact addContactHandler = {addContactHandler}/>
       <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;