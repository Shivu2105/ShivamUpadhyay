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

    // Toggle mode
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

// function sendMail(){
//     var params ={
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value,
//     };

//     const serviceId = "service_qx37xyc";
//     const templateId = "template_t7obxab";

//     emailjs.send(serviceId, templateId, params).then((res) =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("message").value = "";

//         console.log(res);
//         alert("your message sent successfully");
//     })
//     .catch(err => console.log(err));
// }

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "shivamgamingyt2105@gmail.com",
        Password : "yseievwkfagetqpq",
        To : 'shivamgamingyt2105@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}