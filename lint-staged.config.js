const path = require('path');

const eslintFix = (filenames) =>
  `react-scripts lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const format = (filenames) => filenames.map((f) => `prettier --write ${f}`);

const typeCheck = () => 'tsc --noEmit';

module.exports = {
  '*.{css,js,jsx,ts,tsx,json}': [format],
  '*.{js,jsx,ts,tsx}': [eslintFix],
  '*.{ts,tsx}': [typeCheck]
};
