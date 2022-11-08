import { FC, FormEvent, memo } from "react";

import { StyledDropdown, StyledSelect, StyledSelectLabel, StyledSelectWrapper } from "./Dropdown.style";

export type TDropdownSize = 'default' | 'small' | 'large'

interface IDropdownOption {
  value: string,
  label: string
}

export interface IDropdownProps {
  label?: string,
  value?: string,
  options?: IDropdownOption[],
  onChange?: (e: FormEvent<HTMLSelectElement>) => void,
  size?: TDropdownSize
}

const Dropdown: FC<IDropdownProps> = props => {
  const { label = '', value = '', options = [], onChange, size = 'default' } = props;

  return (
    <StyledDropdown aria-label={`listing-dropdown-${label.replaceAll(' ', '-').toLocaleLowerCase()}`}>
      <label>
        <StyledSelectLabel>{label}</StyledSelectLabel>
        <StyledSelectWrapper>
          <StyledSelect value={value} onChange={onChange} dropdownSize={size}>
            {options.map((option: IDropdownOption) => (
              <option 
                key={option.value}
                value={option.value}
                data-testid={`${label.replaceAll(' ', '-').toLocaleLowerCase()}-option`}>{option.label}</option>
            ))}
          </StyledSelect>
        </StyledSelectWrapper>
      </label>
    </StyledDropdown>
  );
}

export default memo(Dropdown);
