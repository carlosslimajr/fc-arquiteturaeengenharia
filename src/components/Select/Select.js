import { SelectCustom } from 'components/commonStyles';
import React from 'react';

const Select = ({ options, value, setValue, children, ...props }) => {
  return (
    <SelectCustom
      value={value}
      onChange={e => setValue(e.target.value)}
      {...props}
    >
      <option hidden value="">
        {children}
      </option>
      {options &&
        options.map(
          option =>
            option.status === 'approved' && (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ),
        )}
    </SelectCustom>
  );
};

export default Select;
