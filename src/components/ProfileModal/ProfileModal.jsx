import { useState } from 'react';
import Modal from 'react-modal';
import { ImUser } from "react-icons/im";
import css from './ProfileModal.module.css';

Modal.setAppElement('#root');

const ProfileModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subModalIsOpen, setSubModalIsOpen] = useState(false);
  const [subModalContent, setSubModalContent] = useState('');

  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  
  const openSubModal = (content) => {
    setSubModalContent(content);
    setSubModalIsOpen(true);
  };
  const closeSubModal = () => setSubModalIsOpen(false);

  return (
    <div className={css.profileModal}>
      <button onClick={toggleModal} className="css.about-me-icon">
        <ImUser />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Content Label"
        className="css.modal-content"
        overlayClassName="css.modal-overlay"
      >
        <div className='css.profile-bubble'>
        <div className="css.profileHeader">
          <img src="/src/assets/profile_icon.png" alt="Profile" className="css.profile-picture" />
            
          <h2>Вікторія</h2>
        </div>
        <ul className="css.profile-options">
          <li onClick={() => openSubModal('Редагування профілю')}>Редагування профілю</li>
          <li onClick={() => openSubModal('Оголошення')}>Оголошення</li>
          <li onClick={() => openSubModal('Повідомлення')}>Повідомлення</li>
          <li onClick={() => openSubModal('Обрані')}>Обрані</li>
          <li onClick={() => openSubModal('Вихід')}>Вихід</li>
          </ul>
          </div>
      </Modal>
      <Modal
        isOpen={subModalIsOpen}
        onRequestClose={closeSubModal}
        contentLabel="Sub Modal"
        className="css.modal-content"
        overlayClassName="css.modal-overlay"
      >
        <h2>{subModalContent}</h2>
        <button onClick={closeSubModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ProfileModal;