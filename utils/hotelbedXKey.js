const crypto = require('crypto');

function hashString() {
  let inputString = `34396c941923d1778d1e5ad83ca974cca1df931412`;
  let time = new Date();
  time = time.getTime();
  time /= 1000;
  time = parseInt(time);
  console.log(time, 'time');
  inputString += `${time}`;
  const hash = crypto.createHash('sha256');
  hash.update(inputString);
  return hash.digest('hex');
}

module.exports = { hashString };
