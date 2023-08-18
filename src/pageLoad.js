function createAndAppendElements(){

    const contentDiv = document.getElementById('content');

    const midbar = document.createElement('div');
    midbar.classList.add('midbar');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to My Restaurant';

    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a sample page created dynamically..!';
    


    midbar.appendChild(heading);
    midbar.appendChild(paragraph);

    contentDiv.appendChild(midbar);
}


export default createAndAppendElements;