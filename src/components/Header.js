import styled from "styled-components";
import fitnessEvo from "../assets/images/fitnessEvo.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function Header({ text, signOutButton }) {
  const { name } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }
  return (
    <StyledDiv signOutButton={signOutButton}>
      <div>{text}</div>
      <div>
        <img onClick={signOut} src={fitnessEvo} alt="Figura de logout" />
        <p>Sair</p>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #602323;
  font-weight: 700;
  font-size: 24px;
  padding: 0 25px;
  color: #ffffff;

  img {
    visibility: ${(props) => (props.signOutButton ? "initial" : "hidden")};
    width: 40px;
    height: 40px;
    margin: 0;

    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 18px;
    font-weight: 400;

    :hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;
