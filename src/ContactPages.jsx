import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import "./ContactPages.css"
import ContactNavbar from './Navbar/ContactNavbar';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const openModal = () => {
    setCurrentContact(null); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <ContactNavbar/>
    <div className="contact-page">
      <button className='contact-page-button' onClick={openModal}>Add Contact</button>
      <ContactList setCurrentContact={setCurrentContact} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      </Modal>
    </div>
    </>
  );
};

export default ContactPage;
