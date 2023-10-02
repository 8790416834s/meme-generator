import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  height: auto;
`

export const FormContainer = styled.form`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const MainHeading = styled.h1`
  color: #35469c;
`
export const LabelText = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 12px;
`

export const InputText = styled.input`
  margin-bottom: 15px;
  width: 350px;
  color: #7e858e;
  border-radius: 2px;
  border: 1px solid #7e858e;
`

export const DropDown = styled.select`
  width: 100px;
  margin-bottom: 20px;
  border: 1px solid #7e858e;
`

export const DropDownList = styled.option``

export const GenerateButton = styled.button`
  background-color: #0b99ff;
  border-radius: 5px;
  padding: 10px;
  border-width: 0px;
  color: #ffffff;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
`
