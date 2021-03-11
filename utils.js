const readline = require("readline-sync");

class Messages {
  warning = (msg) => {
    console.log("\x1b[33m%s\x1b[0m", `\n${msg}`);
  };
  success = (msg) => {
    console.log("\x1b[32m%s\x1b[0m", `\n${msg}`);
  };
  error = (msg) => {
    console.log("\x1b[31m%s\x1b[0m", `\n${msg}`);
  };
}

class Questions {
  question = (msg) => {
    return readline.question(`${msg}`);
  };
  questionFloat = (msg) => {
    return readline.questionFloat(`${msg}`);
  };
  select = (options, msg) => {
    return readline.keyInSelect(options, `${msg}`);
  };
}

module.exports = {
  messages: new Messages(),
  questions: new Questions(),
};
