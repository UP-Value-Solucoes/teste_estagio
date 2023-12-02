import React, {useState} from 'react';
import LogoUpValue from '../../images/Logo.png';  // Ajuste o nome da imagem conforme necessário
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import FeedbackModal from '../../components/ComponentModal';


Modal.setAppElement('#root'); // Defina o elemento raiz do seu aplicativo (pode ser o id do seu root div)

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isEmailValid = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleSignIn = async () => {
    setError(''); // Limpa mensagens de erro antes de validar novamente

    // Validar campos
    if (!email || !password) {
      setModalIsOpen(true);
      return;
    }

    // Verificar o formato do e-mail
    if (!isEmailValid(email)) {
      setError('Formato de e-mail inválido');
      return;
    }

    try {
      const response = await fetch('http://localhost:3033/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Examine a resposta do servidor e lide com ela conforme necessário
      if(response.status === 401){
        setError('Senha Incorreta');
      }
      else if(response.status === 404){
        setError('E-mail não cadastrado');
      }

      else{
        setError('Login efetuado com sucesso!');
      }
      localStorage.setItem('token', data.token);

    } catch (error) {
      console.error('Erro ao fazer login:');
      setError('Erro ao fazer login. Tente novamente.');
    }
    
    <componentLogin user={email} senha={password} />
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };


  return (
    <div className="main-login">
      <div className="left-login">
        <img src={LogoUpValue} className="left-login-image" alt="Logo"/>
        <h1>A Plataforma de gestão que eleva <br/> a performance da sua empresa</h1>
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="usuario">E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
          </div>
          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha"/>
          
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="btn-login" onClick={handleSignIn}>Login</button>
          <div className="separator">OU</div>
          <div className="btn-media-container">
            <button className="btn-login btn-google">
              <FontAwesomeIcon icon={faGoogle}/>
              <span> Google </span>
            </button>
            <button className="btn-login btn-linkedin">
              <FontAwesomeIcon icon={faLinkedin}/>
              <span> LinkedIn </span>
            </button>
          </div>
          
          <div className="below-the-button">
            <h1>Não tem uma conta? <Link to="/cadastro">Registre-se</Link></h1>
          </div>
        </div>
      </div>
      <FeedbackModal
      isOpen={modalIsOpen}
      mensagem='Preencha todos os campos'
      buttonText='Fechar'
      onRequestClose={handleModalClose} 
      
    />
    </div>
  );
}

export default Login;