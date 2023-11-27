import {
  ContainerForm,
  ContainerInput,
  FooterContainer,
  Main,
  SubmitButton,
} from "./styles";

export function Home() {
  return (
    <Main>
      <ContainerForm>
        <h1>Login</h1>
        <ContainerInput>
          <label>Seu e-mail</label>
          <input type="text" placeholder="contato@gmail.com" />
        </ContainerInput>
        <ContainerInput>
          <label>Sua senha</label>
          <input type="password" placeholder="123" />
        </ContainerInput>
        <SubmitButton>Logar</SubmitButton>
        <FooterContainer>
          <p>Ainda não tem uma conta?</p>
          <button>Cadastre-se</button>
        </FooterContainer>
      </ContainerForm>
    </Main>
  );
}
