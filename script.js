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

const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
// const btn = document.getElementById('btn');
const btn = document.getElementsByClassName('contact-form')[0];

btn.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Clicked");
    // let ebody = `
    // <h1>First Name: </h1>${fname.value}
    // <br>
    // <h1>Last Name: </h1>${lname.value}
    // `;

    // Email.send({
    //     SecureToken : "your-token", //add your token here
    //     To : 'them@website.com', 
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : ebody
    // }).then(
    //   message => alert(message)
    // );
});