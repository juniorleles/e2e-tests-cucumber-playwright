/**
 * Gera relatório HTML a partir do JSON do Cucumber.
 * Executar após: npm run test:report
 */

const report = require('multiple-cucumber-html-reporter');
const path = require('path');

report.generate({
  jsonDir: path.join('reports'),
  reportPath: path.join('reports', 'html-report'),
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local Machine',
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
  customData: {
    title: 'Relatório de Testes E2E',
    data: [
      { label: 'Projeto', value: 'E2E Tests — Cucumber + Playwright' },
      { label: 'Aplicação', value: 'The Internet Herokuapp' },
      { label: 'URL', value: 'https://the-internet.herokuapp.com' },
      { label: 'Execução', value: new Date().toLocaleString('pt-BR') },
    ],
  },
  pageTitle: 'Relatório E2E — Login',
  reportName: 'Testes E2E com Cucumber + Playwright',
  displayDuration: true,
  durationInMS: true,
});

console.log('✅ Relatório HTML gerado em: reports/html-report/index.html');
