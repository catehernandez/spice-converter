import React from 'react';
import { WholeUnits, ConversionRatios } from './SpiceConfig';

//import StyledSelect from './components/StyledSelect';
import Select from 'react-select';
import { NumericalInput } from './components/StyledInput';
import EqualSign from './components/EqualSign';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSpice: '',
      conversionRatio: 0,
      wholeUnits: 0,
      groundUnits: 0,
    };
  }

  selectSpice = (selectedOption) => {
    let { value } = selectedOption;

    this.setState({
      selectedSpice: value,
      conversionRatio: ConversionRatios[value],
      groundUnits: this.state.wholeUnits / ConversionRatios[value],
    });
  };

  convertToGround = (event) => {
    let value = event.target.value;

    this.setState({
      wholeUnits: value,
      groundUnits: value / this.state.conversionRatio,
    });
  };

  convertToWhole = (event) => {
    let value = event.target.value;

    this.setState({
      groundUnits: value,
      wholeUnits: value * this.state.conversionRatio,
    });
  };

  render() {
    let spices = Object.keys(WholeUnits);

    const options = spices.map((spice) => ({
      value: `${spice}`,
      label: `${WholeUnits[spice]}`,
    }));

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
    };

    return (
      <main>
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToGround}
            value={this.state.wholeUnits}
            step="0.25"
          />
          <br />
          <Select
            styles={customSelectStyles}
            onChange={this.selectSpice}
            options={options}
          ></Select>
        </div>
        <EqualSign />
        <div>
          <NumericalInput
            type="number"
            onChange={this.convertToWhole}
            value={this.state.groundUnits}
            step="0.25"
          />
        </div>
        <div>tsp ground {this.state.selectedSpice}</div>
      </main>
    );
  }
}

export default App;
