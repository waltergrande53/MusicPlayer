import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Form = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
  min-width: 50vw;
  margin-right: 40px;
`;
const FormEl = styled.div`
  padding: 10%;
  display: block;
  text-align: center;
  background-color: #313131;
  border-radius: 60px;
  width: 100%;
`;
const InputText = styled.input`
  width: 50%;
`;

const Upload = () => {
  return (
    <Form class="form">
      <FormEl class="floating">
        <h4> Upload your song</h4>
        <div>
          <span>Title</span>
          <InputText type="text" />
        </div>

        <br />

        <div>
          <span>Artist</span>
          <InputText type="text" />
        </div>

        <input type="file" />
        <br />
        <button>Upload Song </button>
      </FormEl>
    </Form>
  );
};
export default Upload;
