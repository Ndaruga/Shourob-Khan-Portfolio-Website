window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

// Add the Typing Effect
    const jobTitleElement = document.getElementById("job-title");
    const jobTitles = ["Data Scientist", "ML Engineer","Web Developer"];
    let currentIndex = 0;
    let currentJobTitle = "";
    let isTyping = true;

    function updateJobTitle() {
        if (isTyping) {
            currentJobTitle = jobTitles[currentIndex];
            jobTitleElement.textContent = currentJobTitle.slice(0, jobTitleElement.textContent.length + 1);

            if (jobTitleElement.textContent.length === currentJobTitle.length) {
                isTyping = false;
                setTimeout(updateJobTitle, 1000);
            } else {
                setTimeout(updateJobTitle, 100);
            }
        } else {
            jobTitleElement.textContent = currentJobTitle.slice(0, jobTitleElement.textContent.length - 1);

            if (jobTitleElement.textContent === "") {
                isTyping = true;
                currentIndex = (currentIndex + 1) % jobTitles.length;
                setTimeout(updateJobTitle, 500);
            } else {
                setTimeout(updateJobTitle, 100);
            }
        }
    }

    setTimeout(updateJobTitle, 500); // Start typing effect after 0.5 seconds

});

function sendEmail() {      
    // e.preventDefault();
    console.log("Function called");
    
    // Get input values
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");
    console.log(messageInput.value);

    // Check if required fields are empty
    if (!emailInput.value || !subjectInput.value || !messageInput.value) {
        
        alert('Please fill in all required fields.');
    } else {
    // Replace with the correct method to send emails using the library you're using
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "kingorifrancis29@gmail.com",
        Password : "4B88F873FC5CF10E524C3F45C4D7DCA049EB",
        To : 'kingorifrancis19@gmail.com',
        From : emailInput.value,
        Subject : subjectInput.value,
        Body : messageInput.value
    }).then(
        message => {
            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            emailInput.value = "";
            subjectInput.value = "";
            messageInput.value = "";
        }
    ).catch(
        error => {
            document.getElementById('submitErrorMessage').classList.remove('d-none');
        }
    );
    }
    return false;
}
