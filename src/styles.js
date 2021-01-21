import styled from 'styled-components';

export const LoginBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export const SearchBody = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderStyle = styled.header`
  align-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  h1 {
    font-size: 40px;
    margin-bottom: 0;
  }

  p {
    font-size: 30px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  section {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    max-width: 600px;
    min-width: 400px;
    width: 80%;
  }

  div {
    align-items: baseline;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  button {
    background: #cf2200;
    border-radius: 5px;
    border: 0;
    color: white;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
    margin-left: 10px;
    &:hover {
      background: #e32500;
    }
  }
`;

export const TitleLogin = styled.h1`
  font-size: 60px;
  margin-bottom: 10px;
  margin-top: 0px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 200px;
  width: 80%;

  button {
    background: linear-gradient(#67ae55, #578843);
    border-color: #3b6e22 #3b6e22 #2c5115;
    border-radius: 5px;
    box-shadow: 0 1px 1px #a4e388;
    color: white;
    font-size: 20px;
    font-weight: 900;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 15px;
    &:hover {
      background: linear-gradient(#89d675, #61974b);
    }
  }

  input {
    border-radius: 5px;
    border: 1px solid darkgray;
    height: 10px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    padding: 12px;
    &:placeholder {
      color: darkgray;
      font-size: 18px;
    }
  }

  label {
    color: black;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2px;
    margin-left: 5px;
  }

  span {
    color: red;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-size: 15px;
    margin: 0px;
    text-decoration: none;
  }
`;

export const SearchBarStyle = styled.section`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 200vw;

  label {
    font-size: 23px;
    margin-right: 8px;
  }

  input {
    border-radius: 5px;
    border: 1px solid darkgray;
    height: 10px;
    letter-spacing: 1px;
    padding: 10px;
    &:placeholder {
      color: darkgray;
      font-size: 18px;
    }
  }

  button {
    background-color: #32b3ff;
    border-color: #0071b3;
    border-radius: 5px;
    color: white;
    font-weight: 900;
    margin-left: 2px;
    padding: 7px;
    &:hover {
      background-color: #0071b3;
    }
  }
`;

export const ReposList = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const ReposCard = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  button {
    background-color: #0097ff;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: white;
    font-weight: bold;
    margin: 3px;
    padding: 8px;
    &:hover {
      background-color: #0082dc;
      box-shadow: 0 0 10px darkgray;
      cursor: default;
    }
  }
`;

export const UserContainer = styled.section`
  background: radial-gradient(
    circle,
    rgba(236, 236, 236, 1) 35%,
    rgba(191, 191, 191, 1) 100%
  );
  background: rgb(236, 236, 236);
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 3px 3px darkgray;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  max-width: 600px;
  min-width: 465px;
  padding-right: 10px;
  width: 60vw;

  div {
    font-size: 17px;
  }

  img {
    border-bottom-left-radius: 10px;
    border-right: 1px solid darkgray;
    border-top-left-radius: 10px;
    box-shadow: 5px 0 5px -2px #888;
    margin-right: 5px;
  }

  button {
    align-self: flex-end;
    border: 1px red solid;
    width: 120px;
  }
`;

export const ReposButton = styled.button`
  background-color: #45da00;
  border-color: #3fc600;
  border-radius: 5px;
  color: white;
  font-weight: 900;
  margin-bottom: 5px;
  margin-top: 7px;
  padding: 8px;
`;

export const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  max-width: 600px;
  background-color: lightgray;
  border-radius: 8px;
  padding-left: 10px;

  span {
    padding: 6px;
    padding-left: 0px;
  }

  a {
    text-decoration: none;
    margin-top: 15px;
  }
`;

export const ButtonModal = styled.button`
  align-self: flex-start;
  background-color: red;
  border-radius: 100%;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  padding: 8px;
`;
