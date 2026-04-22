# E2E Tests — Cucumber + Playwright

Testes End-to-End utilizando **Cucumber** (BDD) + **Playwright**, com **Page Object Pattern**.

Aplicação testada: [The Internet Herokuapp](https://the-internet.herokuapp.com/login)

---

## Estrutura do projeto

```
e2e-tests-cucumber-playwright/
├── features/
│   ├── login.feature                    # Cenários em Gherkin (PT-BR)
│   ├── pages/
│   │   ├── LoginPage.js                 # Page Object da página de login
│   │   └── SecurePage.js                # Page Object da área segura
│   ├── step_definitions/
│   │   └── login.steps.js               # Implementação dos steps
│   └── support/
│       ├── world.js                     # Contexto compartilhado (CustomWorld)
│       └── hooks.js                     # Before/After + screenshot em falha
├── scripts/
│   └── generate-report.js               # Gerador de relatório HTML
├── reports/                             # Relatórios gerados (auto)
├── .github/workflows/e2e-tests.yml      # CI/CD GitHub Actions
├── cucumber.js                          # Configuração do Cucumber
├── package.json
└── README.md
```

---

## Pré-requisitos

- Node.js 18+
- npm 9+

---

## Instalação

```bash
git clone https://github.com/seu-usuario/e2e-tests-cucumber-playwright.git
cd e2e-tests-cucumber-playwright

npm install
npx playwright install chromium
```

---

## Executando os testes

```bash
# Todos os testes (headless)
npm test

# Com relatório JSON + HTML
npm run test:report

# Somente testes positivos
npm run test:positivo

# Somente testes negativos
npm run test:negativo

# Com browser visível (útil para debug)
npm run test:headed

# Gerar relatório HTML após execução
npm run report:html
```

---

## Cobertura de cenários

### Fluxos Positivos (`@positivo`)
| Cenário | Descrição |
|---|---|
| Login válido | Credenciais corretas → redireciona para área segura |
| Navegação pós-login | Valida URL `/secure` e título da página |
| Logout | Login → logout → redirecionamento para login |

### Fluxos Negativos (`@negativo`)
| Cenário | Descrição |
|---|---|
| Senha incorreta | Exibe "Your password is invalid!" |
| Usuário inexistente | Exibe "Your username is invalid!" |
| Ambos os campos em branco | Exibe erro de usuário inválido |
| Apenas usuário preenchido | Exibe "Your password is invalid!" |
| Apenas senha preenchida | Exibe "Your username is invalid!" |
| Múltiplas credenciais (Esquema) | 4 combinações inválidas via tabela |

**Total: 11 cenários** (3 positivos + 8 negativos)

---

## Boas práticas aplicadas

- **Page Object Pattern** — seletores e ações encapsulados por página
- **CustomWorld** — contexto compartilhado entre steps sem variáveis globais
- **Hooks** — setup/teardown automático por cenário
- **Screenshot automático** em caso de falha
- **Tags** — `@positivo`, `@negativo`, `@smoke`, `@login`
- **Esquema do Cenário** — data-driven testing com tabela de exemplos
- **Idioma PT-BR** — features escritas em português

---

## Aplicação utilizada

[The Internet Herokuapp](https://the-internet.herokuapp.com) — aplicação pública para prática de automação.

Credenciais válidas:
- **Usuário:** `tomsmith`
- **Senha:** `SuperSecretPassword!`
