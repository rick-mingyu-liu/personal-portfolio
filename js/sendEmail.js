const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value} <br>
    Email: ${email.value} <br> message: ${mess.value}`;

    Email.send({
        SecureToken: "92763246-df74-431b-bb3d-e050a5612008",
        To : 'rickmyliu@gmail.com',
        From : "rickmyliu@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll('.item');

    for (const item of items) {
        if (item.value === '') {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener('keyup', () => {
            if (item.value !== '') {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
    // sendEmail();

    if (!fullName.classList.contains('error') && !email.classList.contains('error') 
        && !subject.classList.contains('error') 
        && !mess.classList.contains('error')) {
            sendEmail();

            form.reset();
            return false;
    }
});