import styled from "styled-components";
import { TDropdownSize } from "./Dropdown";

export const StyledDropdown = styled.div`
  margin: 0 10px 0 0; 
  width: 300px;

  label {
    display: flex;
    align-items: center;
  }
`

export const StyledSelectLabel = styled.span`
  font-size: 13px;
  margin-right: 5px;
  width: 118px;
  text-align: right;
  width: 50%;
`

export const StyledSelectWrapper = styled.div`
  width: 50%;
`

interface IStyledSelect {
  dropdownSize: TDropdownSize,
}

export const StyledSelect = styled.select<IStyledSelect>`
  width: 110px;
  width: ${(props) => {
    switch(props.dropdownSize) {
      case 'small':
        return '50px'
      case 'large':
        return '150px'
      default:
        return '100px'
    }
  }};
  height: 30px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid grey;
`
