//whole to ground conversion ratio
const SpiceConfig = {
  allspice: {
    conversionRatio: 1,
    wholeUnits: 'tsp allspice berries',
  },
  aniseed: {
    conversionRatio: 1,
    wholeUnits: 'tsp aniseed',
  },
  'black pepper': {
    conversionRatio: 1 / 1.5,
    wholeUnits: 'tsp black peppercorns',
  },
  caraway: {
    conversionRatio: 1,
    wholeUnits: 'tsp caraway seeds',
  },
  cardamom: {
    conversionRatio: 12 / 1,
    wholeUnits: 'cardamom pods, dehusked',
  },
  cinnamon: {
    conversionRatio: 1,
    wholeUnits: '1.5 inch cinnamon stick',
  },
  cloves: {
    conversionRatio: 1 / 0.75,
    wholeUnits: 'tsp cloves',
  },
  coriander: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp coriander seeds',
  },
  cumin: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp cumin seeds',
  },
  fennel: {
    conversionRatio: 1 / 1.25,
    wholeUnits: 'tsp fennel seeds',
  },
  juniper: {
    conversionRatio: 1,
    wholeUnits: 'tsp juniper berries',
  },
  mustard: {
    conversionRatio: 1 / 1.5,
    wholeUnits: 'tsp mustard seeds',
  },
  nutmeg: {
    conversionRatio: 1 / 2,
    wholeUnits: 'nutmeg',
  },
  'sichuan pepper': {
    conversionRatio: 3 / 2.75,
    wholeUnits: 'tsp sichuan peppercorns',
  },
};

const Spices = Object.keys(SpiceConfig);

const WholeUnits = Object.fromEntries(
  Spices.map((spice) => [spice, SpiceConfig[spice].wholeUnits])
);

const ConversionRatios = Object.fromEntries(
  Spices.map((spice) => [spice, SpiceConfig[spice].conversionRatio])
);

export { Spices, ConversionRatios, WholeUnits };
