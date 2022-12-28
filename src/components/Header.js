import styled from "styled-components";
import fitnessEvo from "../assets/images/fitnessEvo.png";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

function Header({ text, signOutButton }) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }
  return (
    <StyledDiv signOutButton={signOutButton}>
      <div>
        <Typography variant="h6">{text}</Typography>
      </div>
      <div>
        <img onClick={signOut} src={fitnessEvo} alt="Figura de logout" />
        <Typography>Sair</Typography>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  min-height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #602323;
  font-weight: 700;
  padding: 0 25px;
  color: #ffffff;
  z-index: 1;

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
