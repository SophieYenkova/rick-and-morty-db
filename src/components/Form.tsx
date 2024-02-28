import React, { useState } from "react";
import styled from "styled-components";
import { FormProps, FormData } from "../types";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #ffffff5b;
  padding: 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    max-width: 55%;
  }

`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  background-color: #ffffff5b;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #ffffff5b;
  border: 1px solid #cccccc;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }

`;

const StyledButton = styled.button`
  padding: 10px;
  align-self: center;
  min-width: 15vw;
  min-height: 5vh;
  background-color: #88e23b;
  border-radius: 10px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    status: "",
    type: "",
    gender: "",
    species: "",
    name: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <StyledInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter name..."
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <StyledSelect
          name="gender"
          id="gender"
          onChange={handleSelectChange}
          value={formData.gender}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </StyledSelect>
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <StyledSelect
          name="status"
          id="status"
          onChange={handleSelectChange}
          value={formData.status}
        >
          <option value="">Select Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </StyledSelect>
      </div>

      <div>
        <label htmlFor="species">Species:</label>
        <StyledInput
          type="text"
          id="species"
          name="species"
          value={formData.species}
          onChange={handleInputChange}
          placeholder="Enter species..."
        />
      </div>

      <div>
        <label htmlFor="type">Type:</label>
        <StyledInput
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          placeholder="Enter type..."
        />
      </div>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
};

export default Form;
