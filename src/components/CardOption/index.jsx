import React, { useState } from 'react';
import Modal from 'react-modal';
import { CaptionApi } from '../../apis';
import toast from 'react-hot-toast';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const CardOption = ({ content, topic, isUnsave, handleSave, handleUnsave }) => {
  const [email, setEmail] = useState('');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleShare = async () => {
    if (email === '') {
      toast.error('Please enter email');
      return;
    }
    const data = {
      topic,
      email,
      content,
    };
    const response = await CaptionApi.shareCaption(data);
    if (response.status === 200) {
      toast.success('Share Successfully');
    }
    setEmail('');
    setIsOpen(false);
  }

  return (
    <div className='p-5 rounded-md border border-gray-300 mb-4'>
      <p className='mb-4'>{content}</p>
      <div className='flex gap-3 justify-end'>
        <button className='py-2 px-3 rounded-md hover:opacity-90 bg-blue-300' onClick={openModal}>Share</button>
        <button className='py-2 px-3 rounded-md hover:opacity-90 bg-gray-300'
          onClick={isUnsave ? handleUnsave : handleSave}>{isUnsave ? 'Unsave' : 'Save'}
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className='font-semibold mb-4'>Share this caption to your Email</h2>
          <p className='mb-4'>{content}</p>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" placeholder="email@emal.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className='flex justify-end'>
            <button onClick={handleShare} className='me-4'>Share</button>
            <button onClick={closeModal}>close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CardOption;
