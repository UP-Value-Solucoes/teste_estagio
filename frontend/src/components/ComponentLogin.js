const backendURL = 'http://localhost:3033';

async function componentLogin(props){

    const username = props.user;
    const password = props.senha;
  
    try {
      const response = await fetch(`${backendURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if(data.token){
      localStorage.setItem('token', data.token);
      console.log('Token armazenado com sucesso!');
      }
  
    } catch (error) {
      console.error('Erro:', error);
    }


    return(

        <div className="resp">
            <p>Login realizado com sucesso!</p>
        </div>

    );
}

export default componentLogin;
