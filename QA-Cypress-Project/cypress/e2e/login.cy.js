describe('Login', () => {

    const  tela = ['samsung-note9', 'iphone-6']
    tela.forEach(element => {
        
        beforeEach(() => {
            cy.viewport(element); // Define a viewport para o tamanho do iPhone 14 Pro Max em modo paisagem

            // dado que eu estou na página principal do site
            cy.visit('https://automationpratice.com.br')
            // quando eu clicar no botão de login
            cy.get('.right_list_fix > :nth-child(1) > a').click()
        })
        // Cenários de teste para o login
        it('Login com sucesso' ,() => {
        
            // e eu preencher o campo de email com email correto
            cy.get('#user').type('eduardo@qazando.com')

            // e preencher o campo de senha com senha correta
            cy.get('#password').type('123456')

            // e clicar no botão de login
            cy.get('#btnLogin').click()

            // então eu devo ver a mensagem de login realizado
            cy.get('.swal2-popup').should('be.visible')

            // e o título da mensagem deve ser "Login realizado" "Olá, eduardo@qazando.com"
            cy.get('#swal2-title').should('have.text', 'Login realizado')
            
        })

        it('Login com senha errada' ,() => {
            // e eu preencher o campo de email com email correto
            cy.get('#user').type('eduardo@qazando.com')
            //e preencher o campo de senha com senha errada
            cy.get('#password').type('1234')
            // e clicar no botão de login
            cy.get('#btnLogin').click()
            
            // então eu devo ver a mensagem de erro
            cy.get('.invalid_input').should('be.visible')
            // e a mensagem deve ser "Senha inválida."
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        })   

        it('Login com campo senha vazia' ,() => {
            // e eu preencher o campo de email com email correto
            cy.get('#user').type('eduardo@qazando.com')
            // e clicar no botão de login
            cy.get('#btnLogin').click()
            
            // então eu devo ver a mensagem de erro
            cy.get('.invalid_input').should('be.visible')
            // e a mensagem deve ser "Senha inválida."
            cy.get('.invalid_input').should('have.text', 'Senha inválida.')
        })

        it('Login com campo email vazio' ,() => {
            //e quando preencher o campo de senha com senha certa
            cy.get('#password').type('123456')
            // e clicar no botão de login
            cy.get('#btnLogin').click()
            
            // então eu devo ver a mensagem de erro
            cy.get('.invalid_input').should('be.visible')
            // e a mensagem deve ser "Senha inválida."
            cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
        })
    })
})
