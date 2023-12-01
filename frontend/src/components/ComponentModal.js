import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {useHistory} from 'react-router-dom';

const FeedbackModal = ({ mensagem, buttonText, isOpen, onRequestClose }) => {
    const history = useHistory();
    const [isModalOpen, setModalIsOpen] = useState(isOpen); // Utiliza um estado interno para controlar a abertura/fechamento do modal

    const Styles = {
        overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
        width: '300px',
        height: '200px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        backgroundColor: '#dfdfdf',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        },
        message:{
            color: '636363',
            fontSize: '16px',
      
        },
        success: {
          borderColor: 'green',
          width: '100px',
     

        },
        error: {
          borderColor: 'red',
          width: '100px',
          background: '#a6a5a556',
          color: '636363',
          cursor: 'pointer',
          marginTop: '10px',

        },

  };

  const buttonStyle = buttonText === 'Fechar' ? Styles.error : Styles.success;
  const handleModalButtonClick = () => {
    onRequestClose(); // Informa ao componente pai que o modal será fechado
    if (buttonText !== 'Fechar') {
      history.push('/login');
    }
  };

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);



    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={Styles}
        >
          <h2 style={Styles.message}>{mensagem}</h2>
          <button style={buttonStyle} onClick={handleModalButtonClick}>
            {buttonText}
          </button>
        </Modal>
      );
    };

export default FeedbackModal;
