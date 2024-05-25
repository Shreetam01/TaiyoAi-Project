import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../features/contacts/contactsSlice';
import './ContactList.css';

const ContactList = ({ setCurrentContact }) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div className='contactList'>
      {contacts.length === 0 ? (
        <div className='contactList-text'>
          <p>No Contact Found. <br /> Please add contact from Create Contact Button.</p>
        </div>
      ) : (
        <div className='contactList-card-container'>
          {contacts.map((contact) => (
            <div className='contactList-card' key={contact.id}>
              <span className='contactcard-name'>Name: {contact.name} {contact.lastName}</span>
              <span className='contactcard-sts'>Status: {contact.status}</span>
              <div className="multi-btn-container">
                <button className='grn' onClick={() => setCurrentContact(contact)}>Edit</button>
                <button className='red' onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
