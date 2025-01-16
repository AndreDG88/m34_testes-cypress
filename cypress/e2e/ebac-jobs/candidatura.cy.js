//O "comentário" abaixo faz com que o VS Code entenda a tipagem do Cypress
/// <reference types="cypress"/>

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/') // para o cypress visitar a site a ser analizado
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click() // Para clicar no primeiro botão da lista de vagas e se candidatar.
        cy.get('input').should('have.length',7) // Deve encontrar 7 inputs na página
        cy.screenshot('tela-inscricao') //Para um print do final deste teste
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('André Soares')
        cy.get('input[name="email"]').type('andre.soares@exemplo.com')
        cy.get('input[name="telefone"]').type('00 00000-0000')
        cy.get('input[name="endereco"]').type('Rua Aquela lá, bairro Se Sabe Aonde, Cidade essa ai mesmo')
        //Para a opção com select radio, vamos fazer a selecão usando o ".check"
        cy.get("#mac").check()
        //Para selecionar a escolaridade, vamos usar o recurso ".select"
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click() // Para clicar no bottão e finalizar a candidatura.

        //A função abaixo irá ficar vigiando e buscando qualquer alert que tenha o texto definido
        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-final') //Para um print do final deste teste
    })
})