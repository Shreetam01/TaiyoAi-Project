import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../features/contacts/contactsSlice';

const EditContactPopup = ({ contact, onClose }) => {
  const [editedName, setEditedName] = useState(contact.name);
  const [editedEmail, setEditedEmail] = useState(contact.email);
  const dispatch = useDispatch();

  const handleEditContact = () => {
    dispatch(editContact({ id: contact.id, name: editedName, email: editedEmail }));
    onClose(); // Close the popup after editing
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Edit Contact</h2>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleEditContact}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditContactPopup;
