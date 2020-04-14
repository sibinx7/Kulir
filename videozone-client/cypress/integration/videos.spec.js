import '@4tw/cypress-drag-drop';
describe('Visit localhost:3000', () => {
  before(() => {    
    cy.visit('http://localhost:3000'); 
  })
  it('Open localhost:3000 and find Romantic Comedy', () => {    
    cy.contains('Romantic Comedy');
  })
  it('Search videos, It should contain videos with search keyword', () => {
    cy.get("#header-search-toggle").click();
    cy.wait(100);
    cy.get('#video-search-field').type('Family Pot'); // Search `Rear'
    cy.get(100);
    // Now iterate through video gallery and ensure it only contain videos with title `Rear` .video__album    
    let searchVideos = 0;
    cy.get('.video__album').each(($ele, $index) => {
        if(cy.wrap($ele).contains('Family Pot')){
          searchVideos ++;
        }
    });
    cy.get('.video__album').its('length').should('be', searchVideos)
    // expect(searchVideos).to.equal(getCountOfVideos)    
  })

  it('Search then clear search form, it should show form', () => {
    cy.get('#header-search-toggle').click();
    cy.wait(100)
    cy.get('#video-search-field').type('Rear')
    cy.wait(100)
    cy.get('#close-search-form').click();
    cy.wait(100)
    cy.get('#video-search-form').should('not.exist')
  })

  afterEach(() => {
    cy.reload()
  })

  it('Call Video request when user scroll to bottom', () => {
    // Find total number of videos;    
    cy.server()
    cy.route('GET', 'http://localhost:8080/videos*').as('getVideos');  
    // cy.wait('@getVideos')
    cy.wait(2000)        
    // Scroll action     
    cy.window().then((window) => {            
      let previousVideoAlbums = Cypress.$('.video__album').length; // Collect existing video album elements
      cy.wait(1000)       
      window.document.querySelector('.galler__container').scrollIntoView({
        block: 'end'
      }); // Scroll to trigger ajax   
      cy.wait(1000)
      window.document.querySelector('.post-style-content').scrollIntoView(false)         
      cy.wait('@getVideos').then(() => { // Wait to complete ajax
        window.document.querySelector('.galler__container').scrollIntoView({
          block: 'end'
        }); // Scroll to load all fetched data (lazy load component use) 
        cy.wait(1000)
        cy.get('.video__album').its('length').should('be.gt', previousVideoAlbums)
      })                  
    })    
  })
})
