import styled from 'styled-components';
export const BtnSearchBar = styled.button`
  height: 38px;
  width: 88px;
  border: 1px solid #e6dfdf;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: cadetblue;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  margin-left: 15px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: #ffff;
  }
`;
export const InpSearch = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  height: 38px;

  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding-left: 4px;
  padding-right: 4px;
`;
export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
`;
