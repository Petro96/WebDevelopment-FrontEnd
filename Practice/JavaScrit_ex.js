// JS - animation text fields


function animatedForm() {
    const arrows = document.querySelectorAll(".fas fa-arrow-down");


    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling; // arrow
            const parent = arrow.parentElement; // icon top
            const nextForm = parent.nextElementSibling; // input

            //check

            if (input.type === "text" && validateUser(input)) {
                console.log("OK!");
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail(input)) {
                console.log("OK!");
                nextSlide(parent, nextForm);
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease";
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })

        });
    });
}

function validateUser(user) {

    if (user.value.length < 6) {
        console.log('Not enough characters!');
        error('rgb(189,87,87)');
    } else {
        error('rgb(87, 189, 130)');
        return true;
    }

}

function validateEmail(email) {
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valid.test(email.value)) {
        return true;
    } else {
        error('rgb(87, 189, 130)');

    }
}


function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color) {
    document.body.style.backgroundColor = color;
}

//console.log("Hey");
animatedForm(); //calling function