const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

var input = {
    language: 'Solidity',
    sources: {
      'Lottery.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
var output = JSON.parse(solc.compile(JSON.stringify(input)));
//const output = solc.compile(source, 1);
//console.log(output);
module.exports = output.contracts["Lottery.sol"]["Lottery"];
