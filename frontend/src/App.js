import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';



function App() {
 
  return (
    <Router>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        {/* Outras rotas, se necessário */}
        
        <Login></Login>
        <Cadastro></Cadastro>
      </Switch>
    </Router>

  );
}

export default App;
