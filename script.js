const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // when Button click active class
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Section switch on click effect
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id; //dataset refer to whatever element click to target gives data-id
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            // stores the value of current click active component by showing it in console 
            const element = document.getElementById(id);
            element.classList.add('active');            
        }
    })
}

PageTransitions();