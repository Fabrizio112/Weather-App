
describe('Test Weather APP', () => {

  describe('Basic Test Working', () => {
    beforeEach("Visitar la pagina", () => {
      cy.visit("http://127.0.0.1:8080")
    })
    it('Test if the app is working good', () => {
      cy.get('#input-clima').type('Argentina Cordoba Cordoba')
      cy.get('#icon-search').click();
      cy.get('#contenedor-clima').should("be.exist")
      cy.get('#contenedor-clima-extendido').should("be.exist")
    })
    it('Test if datalyst is working', () => {
      cy.get('#input-clima').type('cordo')
      cy.get('#datos').should('be.exist')
      cy.get('#datos option').should('have.length', 5)
    })
    it('Test if the container "clima" has elements', () => {
      cy.get('#input-clima').type('Argentina Cordoba Cordoba')
      cy.get('#icon-search').click();
      cy.get('#contenedor-clima').should("be.exist")
      cy.get('#contenedor-clima #pais-clima ').should("have.text", "Argentina")
      cy.get('#contenedor-clima #ciudad-clima ').should("have.text", "Cordoba Cordoba")
      cy.get('#contenedor-clima #contenedor-clima__derecho ').should("be.exist")
      cy.get('#contenedor-clima #imagen-clima ').should("be.exist")
      cy.get('#contenedor-clima #numero_clima ').should("be.exist")
      cy.get('#contenedor-clima #contenedor-clima__izquierdo').should("be.exist")
      cy.get('#contenedor-clima #contenedor-clima__inferior').should("be.exist")
    })
    it('Test if the container "clima-extendido" has elements', () => {
      cy.get('#input-clima').type('Argentina Cordoba Cordoba')
      cy.get('#icon-search').click();
      cy.get('#contenedor-clima-extendido').should("be.exist")
      cy.get('#contenedor-clima-extendido #dia-hoy').should("be.exist")
      cy.get('#contenedor-clima-extendido #dia-hoy #mini-box').should("have.length", 6)
      cy.get('#contenedor-clima-extendido #dia-mañana').should("be.exist")
      cy.get('#contenedor-clima-extendido #dia-pasado-mañana').should("be.exist")
    })
  })



})