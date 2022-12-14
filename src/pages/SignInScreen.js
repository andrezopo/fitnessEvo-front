import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import StyledContainer from "../styledComponents/StyledContainer";
import fitnessEvo from "../assets/images/fitnessEvo.png";
import StyledButton from "../styledComponents/StyledButton";
import { toast } from "react-toastify";

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
    const promise = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/sign-in`,
      body
    );
    setDisable(true);
    promise.then((res) => {
      const response = res.data;

      const user = {
        token: response.token,
        name: response.name,
      };
      setUserId(response.id);
      setToken(response.token);
      setName(response.name);
      setDisable(false);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Bem-vindo, monstro!");

      navigate("/user", { replace: true });
    });
    promise.catch((err) => {
      if (err.response.status !== 500) {
        toast.info("Usuário e/ou senha incorretos!");
      } else {
        toast.error("Ops, ocorreu um problema!");
      }

      setDisable(false);
    });
  }

  return (
    <StyledContainer disabled={disable}>
      <img src={fitnessEvo} alt="fitnessEvo logo" />
      <h1>Fitness Evo</h1>
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
