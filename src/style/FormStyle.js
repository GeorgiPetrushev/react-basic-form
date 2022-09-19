import styled from "styled-components";

const FromStyle = styled.form`
  background-color: rgb(56,56,56);
  border-radius: 0.5rem;
  margin: auto;
  margin-top: 10rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  box-shadow: 10px 10px 50px 15px #F1E4DA;

  .form-register{
    color: white;
    background-color: green;
    margin: auto;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }
  .empty-form-register{
    height: 18px;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }
  .form-field {
    height: 2rem;
    border-radius: 0.5rem;
    padding-left: 0.3rem;
    font-size: 1.3rem;
    border: black 1px solid;
    font-family: 'Open Sans', sans-serif;
  }
  .paragraph
  {
    color: #ee4e34;
  }
  .empty-paragraph{
    height: 18px;
  }
  .submit {
    min-width: 30%;
    height: auto;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 5rem;
    &:hover{
        background-color: #e68e35;
    }
  }

`;

export default FromStyle;
