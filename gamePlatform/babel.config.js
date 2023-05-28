module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', 'babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    ]
  };
};
