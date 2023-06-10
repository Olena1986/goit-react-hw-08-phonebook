import React from 'react';
import { ContactListStyle } from './ContactList.styled';
import ContactListItem from '../List/ContactListItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
   const contacts = useSelector(state => state.contacts.contacts.items);
   const filter = useSelector(state => state.contacts.filter);
   
    const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 
  return (
    <ContactListStyle.ListStyle>
      {filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact}/>
      ))}
    </ContactListStyle.ListStyle>
  );
};


export default ContactList;

