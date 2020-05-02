/** customStyles for Select element from reac-select
 * See react-select docs for more options
 */
const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    boxShadow: 'none',
    minWidth: 115,

    '&:hover': {
      cursor: 'pointer',
    },
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

    '&:hover': {
      cursor: 'pointer',
    },
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
