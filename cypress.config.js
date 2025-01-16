const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  // abaixo é a configuração do mochawesome
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio', // para definir o diretório de armazenamento
    overwrite: true, // para salvar por cima de relatórios antigos
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss' // definir formato de data e hora do documento
  }
});
