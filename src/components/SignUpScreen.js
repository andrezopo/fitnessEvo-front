import StyledButton from "../styledComponents/StyledButton";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledContainer from "../styledComponents/StyledContainer";
import fitnessEvo from "../assets/images/fitnessEvo.png";
import axios from "axios";
import UserContext from "../contexts/UserContext";

function SignUpScreen() {
  const [disable, setDisable] = useState(false);
  const { email, setEmail, password, setPassword, name, setName } =
    useContext(UserContext);
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();
    const body = {
      email,
      password,
      name,
    };
    const promise = axios.post("http://localhost:5000/sign-up", body);
    setDisable(true);
    promise.then(() => {
      setDisable(false);
      navigate("/", { replace: true });
    });
    promise.catch((err) => {
      alert(err.response.data);
      setDisable(false);
    });
  }

  return (
    <StyledContainer disabled={disable}>
      <img src={fitnessEvo} alt="fitnessEvo logo" />
      <form onSubmit={register}>
        <input
          disabled={disable}
          id="name"
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          disabled={disable}
          id="email"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          disabled={disable}
          id="password"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <StyledButton disabled={disable} height={46} width={326} fontSize={20}>
          Cadastrar
        </StyledButton>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </StyledContainer>
  );
}

export default SignUpScreen;
