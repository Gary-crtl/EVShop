//Creating the mobile toggle menu

let menuToggle = document.getElementById('menu-toggle');
let nav = document.getElementById('nav-menu');

 if(menuToggle && nav) {
    menuToggle.onclick = function () {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        }else{
            nav.style.display = 'block';
        }
    };
 }
    
//Form Validation for both login and Contact pages
let forms = document.getElementsByTagName('form');
for (let i = 0; i < forms.length; i++) {
    forms[i].onsubmit = function(event) {
        let valid = true;
        let inputs = this.getElementsByTagName('input');
        let textareas = this.getElementsByTagName('textarea');

        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].hasAttribute('required') && inputs[j].value.trim() === '') {
                valid = false;
                inputs[j].style.border = '2px solid red';
            }else{
                inputs[j].style.border = '';
            }
        }
        for (let k  = 0; k < inputs.length; k++) {
            if (inputs[k].hasAttribute('required') && inputs[k].value.trim() === '') {
                valid = false;
                inputs[k].style.border = '2px solid red';
            }else{
                inputs[k].style.border = '';
            }
        }
        if (!valid) {
            event.preventDefault();
            alert('Please fill in all required fields.');
        }
    };
}