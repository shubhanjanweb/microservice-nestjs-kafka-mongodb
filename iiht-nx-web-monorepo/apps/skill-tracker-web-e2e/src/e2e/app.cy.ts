import { getHeader, getResult } from '../support/app.po';

describe('skill-tracker-web', () => {
  beforeEach(() => cy.visit('/'));

  it('admin page should open', () => {
    cy.url().should('include', '/admin');
  });

  it('should display title', () => {
    getHeader().contains('Skill Tracker Application');
  });

  it('should get the data', () => {
    cy.get('#name').type('Ajay').should('have.value', 'Ajay');
    cy.get('#associateId').type('CTS001').should('have.value', 'CTS001');
    cy.get('#searchBtn').click();
    cy.fixture('profiles.json').then(rsp => {
      getResult().get('.search-item').should('have.length', rsp.data.length);
      rsp.data.forEach((prof: any, pi: number) => {
        cy.get(`.search-item:nth-child(${pi + 1}) .associate-name`).should('have.text', prof.name);
        cy.get(`.search-item:nth-child(${pi + 1}) .associate-associateId`).should('have.text', prof.associateId);
        cy.get(`.search-item:nth-child(${pi + 1}) .associate-mobile`).should('have.text', prof.mobile);
        cy.get(`.search-item:nth-child(${pi + 1}) .associate-email`).should('have.text', prof.email);
        cy.get(`.search-item:nth-child(${pi + 1}) .technical-skill-list`).get('.skill')
          .should('have.length', prof.skills.length);
        prof.skills.forEach((skill: any, si: number) => {
          cy.get(`.search-item:nth-child(${si + 1}) .skill-skillName`).should('have.text', skill.skillName);
          cy.get(`.search-item:nth-child(${si + 1}) .skill-expertiseLevel`).should('have.text', skill.expertiseLevel);
        });
      });
    });
  });


});
