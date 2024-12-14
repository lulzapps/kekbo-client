const electronConfig = require('./webpack.main.js');
const webConfig = require('./webpack.web.js');

module.exports = (env) =>
{
  if (env && env.target === 'web')
  {
    console.log('Building for Web...');
    return webConfig;
  }
  console.log('Building for Electron...');
  return electronConfig;
};