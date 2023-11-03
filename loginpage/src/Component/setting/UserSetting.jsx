import React, { useState } from 'react';
import Select from 'react-select';

const UserSetting = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setMenuIsOpen(true);
      setMenuIsOpen(false);
    }
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        onInputChange={handleInputChange}
        isClearable
        isSearchable
        menuIsOpen={menuIsOpen} // Control whether the menu is open or closed
        placeholder="Select an option..."
      />
      {selectedOption && (
        <div>
          You selected: {selectedOption.label}
        </div>
      )}
    </div>
  );
};

export default UserSetting