const path = require('path')
const fs = require('fs')

export default function babelGenerate(cwd) {
  console.log("cwd:", cwd)
  const babelConfigPath = path.join(cwd, 'babel.config.json')
  // console.log("babelConfigPath:", babelConfigPath)
  let config = {presets: []}

  if (fs.existsSync(babelConfigPath)) {
    config = fs.readFileSync(babelConfigPath, 'utf-8')
    console.log("config:", config)
    return JSON.parse(config);
  }

  return {
    presets: [
      [
        'react-app',
        {
          typescript: true
        }
      ],
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      '@babel/plugin-syntax-jsx'
    ],
    exclude: 'node_modules/**'
  };
};
