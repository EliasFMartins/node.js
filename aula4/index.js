const fs = require('fs').promises;
const path = require('path');

// fs.readdir(path.resolve(__dirname))
//   .then(files=>console.log(files))
//   .catch(e=>console.log(e))
async function readdir(){
  rootDir= rootDir || path.resolve(__dirname);
  const file = await fs.readdir(rootDir);
}