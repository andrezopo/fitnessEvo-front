import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import StyledContainer from "../styledComponents/StyledContainer";
import fitnessEvo from "../assets/images/fitnessEvo.png";
import StyledButton from "../styledComponents/StyledButton";

function SignInScreen() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setToken,
    setUserId,
    setName,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);

  function signIn(e) {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    const promise = axios.post("http://localhost:5000/sign-in", body);
    setDisable(true);
    promise.then((res) => {
      const response = res.data;
      setUserId(response.id);
      setToken(response.token);
      setName(response.name);
      setDisable(false);

      navigate("/user", { replace: true });
    });
    promise.catch((err) => {
      alert(err.response.data);
      setDisable(false);
    });
  }

  return (
    <StyledContainer disabled={disable} signIn="true">
      <img src={fitnessEvo} alt="fitnessEvo logo" />
      <form onSubmit={signIn}>
        <input
          disabled={disable}
          id="email"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          disabled={disable}
          id="password"
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <StyledButton disabled={disable} height={46} width={326} fontSize={20}>
          Entrar
        </StyledButton>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </StyledContainer>
  );
}

export default SignInScreen;