const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.on('connect', () => {
    console.log('Connection successfully established');
  });
  // interpret incoming data as text
  conn.write('Name: KAP');

  const doSetTimeout = function(i) {
    setTimeout(() => {
      conn.write('Move: up');
      console.log('Move up');
    }, i * 1000);
  };
  
  for (let i = 1; i <= 10; ++i) {
    doSetTimeout(i);
  }

  conn.write('Move: up');
  conn.write('Move: left');
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

module.exports = connect;