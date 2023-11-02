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

    document.addEventListener("DOMContentLoaded", function() {
        const jobTitleElement = document.getElementById("job-title");
        const jobTitles = ["Data Scientist", "Web Developer"];
        let currentIndex = 0;
        let currentJobTitle = jobTitles[currentIndex];
    
        function typeJobTitle() {
            if (currentIndex >= jobTitles.length) {
                currentIndex = 0;
            }
            currentJobTitle = jobTitles[currentIndex];
            const text = currentJobTitle.slice(0, jobTitleElement.textContent.length + 1);
            jobTitleElement.textContent = text;
            if (text === currentJobTitle) {
                setTimeout(eraseJobTitle, 1000);
            } else {
                setTimeout(typeJobTitle, 150);
            }
        }
    
        function eraseJobTitle() {
            const text = currentJobTitle.slice(0, jobTitleElement.textContent.length - 1);
            jobTitleElement.textContent = text;
            if (text === "") {
                currentIndex++;
                setTimeout(typeJobTitle, 500);
            } else {
                setTimeout(eraseJobTitle, 100);
            }
        }
    
        setTimeout(typeJobTitle, 500); // Start typing effect after 0.5 seconds
    });
    

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => response.text())
        .then(result => {
            if (result === "success") {
                // Show success message to the user
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
                form.reset();
            } else {
                // Show error message to the user
                document.getElementById("submitErrorMessage").classList.remove("d-none");
            }
        });
    });



});
