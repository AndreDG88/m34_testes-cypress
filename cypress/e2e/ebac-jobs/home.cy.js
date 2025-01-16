//O "comentário" abaixo faz com que o VS Code entenda a tipagem do Cypress
/// <reference types="cypress"/>

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/') // para o cypress visitar a site a ser analizado
    })

    it('Deve renderizar 4 vagas', () => {
        //No cypress o "cy" é a mesma coisa que o "test"
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4) //para saber se dentro do ul existem 4 li (li filha direta do ul)
    })

    //A seguir o teste para a função de filtragem da página.
    it('Deve filtrar por fullstack', () => {
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        //Com o ".type" o cypress pode digitar o que precisamos no campo de busca
        //Adicionando um "{enter}", sem espaços após a palavra de busca já aciona a busca automaticamente
        
        cy.get('button[type="submit"]').click()//Para acionar o botão de pesquisa após o preenchimento do campo anterior
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})