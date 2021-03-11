const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY, MESSAGE_KEY, MOVE_UP_ACTION,MOVE_DOWN_ACTION, MOVE_LEFT_ACTION, MOVE_RIGHT_ACTION } = require('./constants');
let connection;
let x;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = function(key) {
  clearInterval(x);
  if (key === '\u0003') {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    x = setInterval(() => connection.write(MOVE_UP_ACTION) ,100);
  } else if (key === MOVE_LEFT_KEY) {
    x = setInterval(() => connection.write(MOVE_LEFT_ACTION), 100);
  } else if (key === MOVE_RIGHT_KEY) {
    x = setInterval(() => connection.write(MOVE_DOWN_ACTION), 100);
  } else if (key === MOVE_DOWN_KEY) {
    x = setInterval(() => connection.write(MOVE_RIGHT_ACTION), 100);
  } else if (key === MESSAGE_KEY) {
    connection.write('Say: I am mad');
  }
};

module.exports = setupInput;