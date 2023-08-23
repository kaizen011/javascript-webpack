import tabElements from "./tab";

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

    //navbar

    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    const itemi = document.createElement('li');
    const itemi1 = document.createElement('li');
    const itemi2 = document.createElement('li');
    itemi.textContent = 'Tab';
    itemi1.textContent = 'Tab1';
    itemi2.textContent = 'Tab2';

    itemi1.classList.add('midtab');


    ul.appendChild(itemi);
    ul.appendChild(itemi1);
    ul.appendChild(itemi2);

    

    navbar.appendChild(ul);

    contentDiv.appendChild(navbar);

    // Content Code
    const services = document.createElement('div');
    services.classList.add('services');
    

     const service1 = document.createElement('div');
     const service2 = document.createElement('div');
     const service3 = document.createElement('div');
     const service4 = document.createElement('div');

   

     let img = document.createElement("img")
     img.setAttribute("src", "https://www.e-spincorp.com/wp-content/uploads/2018/02/deeplearning-security.png");
     img.setAttribute("height", "280px");
     img.setAttribute("width", "250px");

     service1.appendChild(img); 
     service2.appendChild(img.cloneNode(true));
     service3.appendChild(img.cloneNode(true));
     service4.appendChild(img.cloneNode(true));
    

     services.appendChild(service1);
     services.appendChild(service2);
     services.appendChild(service3);
     services.appendChild(service4);


     contentDiv.appendChild(services);
     itemi.addEventListener('click', function(){
        tabElements(contentDiv);
    })
     return contentDiv;
}


export default createAndAppendElements;