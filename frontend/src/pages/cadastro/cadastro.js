import React, {useState} from 'react';
import LogoUpValue from '../../images/Logo.png';  // Ajuste o nome da imagem conforme necessário
import { Link} from 'react-router-dom';
import Modal from 'react-modal';
import FeedbackModal from '../../components/ComponentModal';


Modal.setAppElement('#root'); // Defina o elemento raiz do seu aplicativo (pode ser o id do seu root div)



function Cadastro() {  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalMessage] = useState('');
  const [modalContentButton, setModalMessageButton] = useState('');


    const isEmailValid = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };
    const handleSignUp = async () => {
      setError('');

    if (!firstName || !lastName || !email || !password) {
      setModalMessage('Preencha todos os campos.');
      setModalMessageButton('Fechar');
      setModalIsOpen(true);
      return;
    }

    // Verificar o formato do e-mail
    if (!isEmailValid(email)) {
      setError('Formato de e-mail inválido');
      return;
    }

    try {

      // Se o e-mail não existir, continuar com o cadastro
      const response = await fetch('http://localhost:3033/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      if(response.status === 500){
        setError('E-mail já existente');
      }

      else{
        localStorage.setItem('token', data.token);
        console.log('Token armazenado com sucesso!');

         // Configurar o Modal para exibir mensagem de sucesso
         setModalMessage('Cadastro realizado com sucesso!');
         setModalMessageButton('Ir para a página de login');
         setModalIsOpen(true);
 
         // Limpar os campos do formulário após o sucesso
         setFirstName('');
         setLastName('');
         setEmail('');
         setPassword('');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      setError('Erro ao fazer cadastro. Tente novamente.');
    }

    <componentCadastro user={email} senha={password} firstName={firstName} lastName={lastName}/>

  };

  return (
    <div className="main-cadastro">
    <div className="left-cadastro">
      <img src={LogoUpValue} className="left-cadastro-image" alt="Logo" />
      <h1>A Plataforma de gestão que eleva <br/> a performance da sua empresa</h1>
    </div>
    <div className="right-cadastro">
      <div className="card-cadastro">
        <h1>CADASTRO</h1>
        <div className="textfield">
          <label htmlFor="firstName">Nome</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div className="textfield">
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Digite seu sobrenome"
          />
        </div>
        <div className="textfield">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="textfield">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        <button className="btn-cadastro" onClick={handleSignUp}>
          Cadastrar
        </button>
        <div className="below-the-button">
        <h1>
          Já é cadastrado? <Link to="/login">Faça o login</Link>
        </h1>
      </div>
      </div>
    </div>
    <FeedbackModal
      isOpen={modalIsOpen}
      mensagem={modalContent}
      buttonText={modalContentButton}
      onRequestClose={handleModalClose} 
    />
  </div>
);
}


export default Cadastro;
