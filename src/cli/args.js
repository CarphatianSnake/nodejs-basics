import { argv } from 'node:process';

const parseArgs = () => {
  const result = argv.slice(2)
    .reduce((acc, value, index) =>
      index % 2 === 0 ? acc + value.slice(2) + ' is ' : acc + value + ', ', '');

  console.log(result.slice(0, -2));
};

parseArgs();
