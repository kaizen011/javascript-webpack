import createAndAppendElements from "./pageLoad";
import './styles.css';
import tabElements from "./tab";

// Waiting for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', ()=> {
    const contentDiv = createAndAppendElements();

    const itemi = document.querySelector('.midtab');
    
    itemi.addEventListener('click', function(){
        tabElements(contentDiv);
    });
    
    console.log("Event listener added"); // checking
});
