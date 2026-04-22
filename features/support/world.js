/**
 * World — Contexto compartilhado entre todos os steps do Cucumber.
 * Instancia o browser, page e os Page Objects centralizados aqui.
 */

const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { LoginPage } = require('../pages/LoginPage');
const { SecurePage } = require('../pages/SecurePage');

class CustomWorld extends World {
  constructor(options) {
    super(options);

    // Instâncias populadas nos hooks antes de cada cenário
    this.browser   = null;
    this.context   = null;
    this.page      = null;

    // Page Objects
    this.loginPage  = null;
    this.securePage = null;

    // URL base da aplicação
    this.baseUrl = 'https://the-internet.herokuapp.com';
  }

  /**
   * Inicializa browser, contexto e page.
   * Chamado no hook Before de cada cenário.
   */
  async init() {
    const headless = process.env.HEADLESS !== 'false';

    this.browser = await chromium.launch({ headless });

    this.context = await this.browser.newContext({
      baseURL: this.baseUrl,
      viewport: { width: 1280, height: 720 },
      locale: 'pt-BR',
    });

    this.page = await this.context.newPage();

    // Inicializar Page Objects com a mesma instância de page
    this.loginPage  = new LoginPage(this.page);
    this.securePage = new SecurePage(this.page);
  }

  /**
   * Fecha browser ao final de cada cenário.
   */
  async teardown() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
