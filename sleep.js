'use strict';

const sleep = async (ms) => {
  await new Promise((resolve) => setTimeout(resolve, ms));
};

(async () => {
  console.log(1);
  await sleep(5000);
  console.log(2);
})();

