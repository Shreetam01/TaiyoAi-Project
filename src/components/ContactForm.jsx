import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../features/contacts/contactsSlice';
import "./ContactForm.css"

const ContactForm = ({ currentContact, setCurrentContact }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setLastName(currentContact.lastName);
      setStatus(currentContact.status);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      id: currentContact ? currentContact.id : Date.now(),
      name,
      lastName,
      status
    };

    if (currentContact) {
      dispatch(editContact(contactData));
    } else {
      dispatch(addContact(contactData));
    }
    setName('');
    setLastName('');
    setStatus('active');
    setCurrentContact(null);
  };

  return (
    <form onSubmit={handleSubmit} className='contactForm'>
      <input className='contactForm-input' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" required />
      <input className='contactForm-input' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
      <div className='multi-input'>
        <label>
          <input type="radio" value="active" checked={status === 'active'} onChange={(e) => setStatus(e.target.value)} />
          Active
        </label>
        <label>
          <input type="radio" value="inactive" checked={status === 'inactive'} onChange={(e) => setStatus(e.target.value)} />
          Inactive
        </label>
      </div>
      <button type="submit">{currentContact ? 'Edit' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;
