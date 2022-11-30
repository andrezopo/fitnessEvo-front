import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import Header from "../components/Header";
import styled from "styled-components";
import StyledContainer from "../styledComponents/StyledContainer";
import StyledButton from "../styledComponents/StyledButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserAddtionalInfos() {
  const { name, email, setEmail, token } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [activityLevel, setActivityLevel] = useState("");
  const [trainingExperience, setTrainingExperience] = useState("");
  const [objective, setObjective] = useState("");
  const [bodyFat, setBodyFat] = useState("");

  const navigate = useNavigate();

  async function addUserInfos(e) {
    e.preventDefault();
    let userAdditionalInfos = {};
    if (!bodyFat) {
      userAdditionalInfos = {
        sex,
        age,
        weight,
        height,
        activityLevel,
        trainingExperience,
        objective,
      };
    } else {
      userAdditionalInfos = {
        sex,
        age,
        weight,
        height,
        activityLevel,
        trainingExperience,
        objective,
        bodyFat,
      };
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/users/infos`,
        userAdditionalInfos,
        config
      );
      navigate("/today", { replace: true });
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <>
      <Header
        text={`Bem vindo(a), ${name}! Preencha com suas informações!`}
        signOutButton={true}
      />
      <StyledContainer>
        <AdditionalInfoContainer>
          <AdditionalInfoDiv>
            <form onSubmit={(e) => addUserInfos(e)}>
              <div>
                <p>Sexo: </p>
                <select
                  disabled={disable}
                  id="sex"
                  type="text"
                  onChange={(e) => setSex(e.target.value)}
                  value={sex}
                  required
                >
                  {" "}
                  <option value="">Selecione o sexo</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>
              </div>
              <div>
                <p>Idade: </p>
                <input
                  disabled={disable}
                  id="age"
                  type="number"
                  placeholder=""
                  onChange={(e) => setAge(Number(e.target.value))}
                  value={age}
                  required
                />
              </div>
              <div>
                <p>Peso (kg): </p>
                <input
                  disabled={disable}
                  id="weight"
                  type="number"
                  placeholder=""
                  onChange={(e) => setWeight(Number(e.target.value))}
                  value={weight}
                  required
                />
              </div>
              <div>
                <p>Altura (cm): </p>
                <input
                  disabled={disable}
                  id="height"
                  type="number"
                  placeholder=""
                  onChange={(e) => setHeight(Number(e.target.value))}
                  value={height}
                  required
                />
              </div>
              <div>
                <p>Nível de atividade: </p>
                <select
                  disabled={disable}
                  id="activity"
                  type="text"
                  placeholder=""
                  onChange={(e) => setActivityLevel(e.target.value)}
                  value={activityLevel}
                  required
                >
                  <option value="">Selecione o nível de atividade</option>
                  <option value="sedentary">Sedentário(a)</option>
                  <option value="lightly_active">Levemente ativo(a)</option>
                  <option value="active">Ativo(a)</option>
                  <option value="very_active">Altamente ativo(a)</option>
                  <option value="extremely_active">
                    Extremamente ativo(a)
                  </option>
                </select>
              </div>
              <div>
                <p>Nível de experiência: </p>
                <select
                  disabled={disable}
                  id="experience"
                  type="text"
                  placeholder=""
                  onChange={(e) => setTrainingExperience(e.target.value)}
                  value={trainingExperience}
                  required
                >
                  <option value="">Selecione o nível de experiência</option>
                  <option value="beginner">Iniciante</option>
                  <option value="intermediate">Intermediário(a)</option>
                  <option value="advanced">Avançado(a)</option>
                  <option value="athlete">Atleta</option>
                </select>
              </div>
              <div>
                <p>Objetivo: </p>
                <select
                  disabled={disable}
                  id="objective"
                  type="text"
                  placeholder=""
                  onChange={(e) => setObjective(e.target.value)}
                  value={objective}
                  required
                >
                  <option value="">Selecione seu objetivo atual</option>
                  <option value="fat_loss">Perda de gordura</option>
                  <option value="maintenance">Manutenção</option>
                  <option value="mass_gain">Ganho muscular</option>
                </select>
              </div>
              <div>
                <p>% de gordura corporal (Opcional): </p>
                <input
                  disabled={disable}
                  id="bodyFat"
                  type="number"
                  placeholder=""
                  onChange={(e) => setBodyFat(Number(e.target.value))}
                  value={bodyFat}
                />
              </div>
              <StyledButton width={130} height={40} fontSize={18}>
                Confirmar
              </StyledButton>
            </form>
          </AdditionalInfoDiv>
          <InfoDiv>
            <h3>
              Preencha os dados para que possamos fazer os cálculos de seus
              macronutrientes diários. <br />
              Seu gasto calórico diário varia de acordo com seu peso e seu nível
              de atividade:
              <br />
              <ul>
                <li>Sedentário(a): pouco ou nenhum exercício</li>
                <li>Levemente ativo(a): exercício 1 a 3 dias por semana</li>
                <li>Ativo(a): exercício 3 a 5 dias por semana</li>
                <li>Altamente ativo(a): exercício 5 a 6 dias por semana</li>
                <li>
                  Extremamente ativo(a): exercício todos os dias, até mesmo 2x
                  ao dia
                </li>
              </ul>
              A quantidade de proteína necessária depende de seu nível de
              experiência em musculação:
              <br />
              <ul>
                <li>Iniciante: 0 a 2 anos de treino</li>
                <li>Intermediário(a): 3 a 5 anos de treino</li>
                <li>Avançado(a): mais de 5 anos de treino</li>
                <li>Atleta: você compete fisiculturismo</li>
              </ul>
              Caso saiba seu percentual de gordura corporal, os cálculos serão
              ainda mais precisos, mas, caso não tenha confiança na informação,
              deixe o campo em branco!
            </h3>
          </InfoDiv>
        </AdditionalInfoContainer>
      </StyledContainer>
    </>
  );
}

const AdditionalInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 35%;
  height: 90%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  height: 90%;
  margin-top: 20px;

  h3 {
    justify-self: center;
    font-size: 18px;
    line-height: 29px;
    font-weight: 600;
    color: #894a4a;
  }

  ul {
    list-style-type: disc;
    list-style-position: inside;
    font-size: 18px;
    font-weight: 400;
    li {
      margin-top: 5px;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    height: 100%;
    /* margin-top: ; */
    margin-bottom: 10px;

    h3 {
      justify-self: flex-end;
    }
  }
`;

const AdditionalInfoContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  font-size: 16px;
  font-weight: 700;
  color: #894a4a;

  form {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 80vh;

    div {
      width: 80%;
    }
  }

  input {
    height: 26px;
    border-color: #894a4a;
    margin-top: 5px;
    width: 100%;
    font-size: 14px;
    color: #894a4a;
    ::placeholder {
      font-size: 14px;
    }
  }
  select {
    height: 26px;
    border-color: #602323;
    margin-top: 5px;
    width: 100%;
    font-size: 14px;
    color: #894a4a;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: 100%;

    form {
      height: 100%;

      div {
        width: 100%;
      }
    }
  }
`;
