module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: [
      'features/support/world.js',
      'features/support/hooks.js',
      'features/step_definitions/**/*.js',
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html',
    ],
    formatOptions: {
      snippetInterface: 'async-await',
    },
    publishQuiet: true,
  },
};
