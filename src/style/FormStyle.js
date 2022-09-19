import styled from "styled-components";

const FromStyle = styled.form`
  background-color: #ee4e34;
  border-radius: 3rem;
  margin: auto;
  margin-top: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  box-shadow: 20px 20px 50px 15px grey;

  .form-field {
    margin: 1rem 5rem;
    height: 2rem;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    border: black 1px solid;
    font-family: 'Open Sans', sans-serif;
  }

  .submit {
    min-width: 30%;
    height: auto;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 5rem;
    &:hover{
        background-color: #e68e35;
    }
  }

`;

export default FromStyle;
