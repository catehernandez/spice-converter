//see react-select docs for properties
const customSelectStyles = {
  control: (provided, prop) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    boxShadow: 'none',
    minWidth: 115,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#555',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state, theme) => ({
    ...provided,
    display: state.isSelected ? 'none' : 'block',
    backgroundColor: state.isFocused ? 'aliceblue' : 'transparent',
    color: 'inherit',
  }),
  singleValue: () => ({
    width: 'auto',
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingRight: 0,
    paddingLeft: 0,
  }),
};

export default customSelectStyles;
