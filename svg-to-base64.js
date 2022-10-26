'use strict';

const fs = require('fs');

const svgToBase64 = (svgFileName) => {
  const buff = fs.readFileSync(svgFileName);
  return buff.toString('base64');
};

const svgToBase64ForCSS = (svgFileName) => {
  const base64String = svgToBase64(svgFileName);
  return `background-image: url("data:image/svg+xml;base64,${base64String}")`;
}

console.log(svgToBase64ForCSS('example-icon.svg'));