import React from 'react';

const backendURL = 'http://localhost:3033';

async function componentCadastro(props) {
  const { email, password, firstName, lastName } = props; // Certifique-se de receber as propriedades corretas do formulário


  const isEmailValid = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  try {
    const response = await fetch(`${backendURL}/cadastro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName, lastName }), // Certifique-se de enviar os dados corretos
    });

    const data = await response.json();
    console.log(data);

  
    localStorage.setItem('token', data.token);
    console.log('Token armazenado com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
  }

  return (
    <div className="resp">
      <p>Cadastro realizado com sucesso!</p>
    </div>
  );
}

export default componentCadastro;
