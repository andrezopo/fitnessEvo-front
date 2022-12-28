import styled from "styled-components";

export const AdditionalInfoDiv = styled.div`
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

export const InfoDiv = styled.div`
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

export const AdditionalInfoContainer = styled.div`
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
