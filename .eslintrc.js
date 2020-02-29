module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'global-require': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-ke': 0
  },
};
