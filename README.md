# Página de Login e cadastro - UpValue

A página de login e cadastro é parte integrante de uma plataforma de uma empresa de gestão chamada "UpValue". Essa página permite que os usuários acessem a plataforma inserindo suas credenciais, e-mail e senha ou se cadastrem caso não possuam uma conta.

## Componente Login

![Tela de Login](..//frontend/src/images/LoginImagem.png)

- Responsável por gerenciar a interface de usuário para a autenticação. Ele inclui:
    - Campos de Entrada: Para inserção do e-mail e senha do usuário.
    - Botão de Login: Inicia o processo de autenticação ao clicar, realizando validações necessárias.
    - Botões de Login com Redes Sociais: Integração com o Google e LinkedIn para facilitar o acesso.
    - Modal de Erro: Um modal é exibido caso o usuário tente logar sem preencher todos os campos necessários.
    - Mensagem de erro: Caso o usuário insira um e-mail não cadastrado ou senha inválida, é mostrado na tela uma mensagem informando o erro do usuário.


## Validações e Requisições
- Validação de E-mail: Utiliza uma expressão regular para validar o formato do e-mail.
- Chamada à API: Realiza uma requisição POST para <http://localhost:3033/login> para autenticar o usuário.
- Tratamento de Erros: Lida com diferentes cenários, como senha incorreta, e-mail não cadastrado, ou falha na requisição.

## Dependências externas
- React: Biblioteca principal para construção de interfaces.
- react-router-dom: Utilizado para navegação entre diferentes páginas.
- react-modal: Gerencia a exibição de modais na aplicação.
- @fortawesome/react-fontawesome: Fornece ícones de marcas, como Google e LinkedIn.


## Componente cadastro
![Tela de Cadastro](../frontend/src/images/CadastroImage.png)

- É uma parte essencial da plataforma "UpValue". Essa página permite que novos usuários se cadastrem na plataforma, fornecendo informações pessoais como nome, sobrenome, e-mail e senha.
- O componente Cadastro gerencia a interface de usuário para o processo de cadastro. Incluindo:
    - Campos de Entrada: Para inserção do nome, sobrenome, e-mail e senha do usuário.
    - Botão de Cadastro: Inicia o processo de cadastro ao ser clicado, realizando validações necessárias.
    - Feedback Visual: Utiliza modais e mensagens de erro para fornecer feedbacks ao usuário sobre o sucesso ou falha no cadastro.


## Validações e Requisições
- Validação de E-mail: Utiliza uma expressão regular para validar o formato do e-mail.
- Chamada à API: Realiza uma requisição POST para http://localhost:3033/cadastro para cadastrar o usuário.
- Tratamento de Erros: Lida com diferentes cenários, como e-mail já existente ou falha na requisição.

## Modal de Feedback
- Estilos Personalizados: Utiliza estilos diferentes no modal para indicar sucesso (borda verde) ou erro (borda vermelha).
- Exibição de Mensagem: Informa o usuário sobre o resultado do cadastro, seja sucesso ou falha.
- Botão de ir para login: Permite ao usuário se direcionar até a página de login.

## Dependências Externas
- React: Biblioteca principal para construção de interfaces.
- react-router-dom: Utilizado para navegação entre diferentes páginas.
- react-modal: Gerencia a exibição de modais na aplicação.


# Backend da Aplicação

## Autenticação de Usuários
- O backend da aplicação é responsável por gerenciar a autenticação dos usuários. O processo de autenticação ocorre da seguinte maneira:

1. Rota de Login (POST /login):
- Os usuários enviam suas credenciais (email e senha) para a rota de login.
- O servidor verifica se o usuário com o email fornecido existe no banco de dados.
- Se o usuário existir, o servidor verifica se a senha fornecida corresponde à senha armazenada no banco de dados usando a função bcrypt.compare.
- Se as credenciais estiverem corretas, o servidor gera um token de autenticação usando a função auth.gerarToken e o envia de volta para o cliente.
- Caso contrário, o servidor retorna um erro indicando que as credenciais são inválidas.

## Cadastro de Usuários
- Além disso, a aplicação permite o cadastro de novos usuários. O processo de cadastro envolve:

1. Rota de Cadastro (POST /cadastro):
- Os usuários enviam informações como nome, sobrenome, email e senha para a rota de cadastro.
- O servidor utiliza a função auth.hashSenha para criptografar a senha antes de armazená-la no banco de dados.
- Um novo usuário é criado no banco de dados usando a função db.cadastrarUsuario.
- Após o cadastro bem-sucedido, um token de autenticação é gerado e retornado ao cliente.

## Instruções de Uso para o frontend
- Clone o repositório.
- Instale as dependências usando 
    ### `npm install`
- Execute a aplicação com:
    ### `npm start` 

## Instruções de Uso para o backend
- Pré-requisitos
    Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em https://nodejs.org/.

- Configuração
1. Clone este repositório em sua máquina local: 
    ### `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Acesse o diretório do projeto:

    ### `cd seu-repositorio`

3. Instale as dependências do projeto:

    ### `npm install`

4. Certifique-se de configurar o banco de dados. O backend presume a existência de um banco de dados e fornece conexões através do módulo db. Certifique-se de configurar o arquivo db.js com as informações corretas de conexão.

## Uso
- Após configurar o ambiente, você pode iniciar o servidor backend usando o seguinte comando:
    ### `nodeserver`
    O servidor estará ouvindo em http://localhost:3033 por padrão.
    

## Rotas
1. Rota de Login
`   Método: POST
    Endpoint: /login
    Corpo da Requisição:
    email: O email do usuário
    password: A senha do usuário
    Resposta Bem-Sucedida:
    Código de status: 200
    Corpo da resposta:
    json
    {
    "message": "Login bem-sucedido",
    "user": { "id": 1, "username": "example@example.com" },
    "token": "token-de-autenticacao"
    }
`
2. Resposta de Erro:
`Código de status: 404 (Usuário não encontrado) ou 401 (Senha incorreta)
Corpo da resposta:
json
{ "error": "Mensagem de erro detalhada"} `

3. Rota de Cadastro
`Método: POST
Endpoint: /cadastro
Corpo da Requisição:
email: O email do novo usuário
password: A senha do novo usuário
firstName: O primeiro nome do novo usuário
lastName: O sobrenome do novo usuário
Resposta Bem-Sucedida:
Código de status: 201
Corpo da resposta:
json
{
  "message": "Usuário cadastrado com sucesso",
  "user": { "id": 1, "username": "example@example.com", "firstName": "John", "lastName": "Doe" },
  "token": "token-de-autenticacao"
}`

4. Resposta de Erro:
`Código de status: 500 (Erro interno do servidor)`


## Authors

  <a href="https://github.com/IsabeleOliveira" target="_blank" rel="noopener noreferrer">Isabele Oliveira</a>  

    
