function createAndAppendElements(){

    const contentDiv = document.getElementById('content');


    // Header Code
    const midbar = document.createElement('div');
    midbar.classList.add('midbar');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to My Repertoire';

    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a sample page created dynamically..!';
    


    midbar.appendChild(heading);
    midbar.appendChild(paragraph);

    contentDiv.appendChild(midbar);


    // Content Code
    const services = document.createElement('div');
    services.classList.add('services');
    contentDiv.appendChild(services);

     const service1 = document.createElement('div');
     const service2 = document.createElement('div');
     const service3 = document.createElement('div');
     const service4 = document.createElement('div');

     services.appendChild(service1);
     services.appendChild(service2);
     services.appendChild(service3);
     services.appendChild(service4);


}


export default createAndAppendElements;