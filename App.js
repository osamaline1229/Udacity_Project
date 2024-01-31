document.addEventListener("DOMContentLoaded", function() {
    // Array of navbar items
    const navbarItems = [
        { name: "News", link: "#section-one", class: "nav-menu" },
        { name: "About", link: "#section-two", class: "nav-menu" },
        { name: "Different Features", link: "#section-three", class: "nav-menu" },
        { name: "Contact us", link: "#section-four", class: "nav-menu" }
    ];

    const navbar = document.getElementById("navbar");

    // Loop through navbar items and dynamically create list items
    navbarItems.forEach(function(item) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item.name;
        a.href = item.link;
        a.className = item.class; 

        li.appendChild(a);
        navbar.appendChild(li);

        // Add click event listener to each navbar item
        a.addEventListener('click', function(event) {
            event.preventDefault(); 
            scrollToSection(item.link); 
            highlightNavItem(a); 
        });
    });

    // Add 'click' event listener to hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navbar'); // Changed to 'navbar'

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Toggles 'active' class on navbar
    });

    // Add 'scroll' event listener to highlight navbar items when scrolling
    document.addEventListener('scroll', function() {
        let sections = document.querySelectorAll('.section');
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            let sectionId = section.getAttribute('id');
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
                section.classList.add('active');
                section.classList.add('highlight'); // Add 'active' class to the section
            } else {
                section.classList.remove('active'); // Remove 'active' class from other sections
            }
        });
    });

    // Function to scroll to a section smoothly
    function scrollToSection(sectionId) {
        var section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        const paddingTop = 20; 
        const offset = section.offsetTop - paddingTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }

    // Function to highlight the clicked navigation item
    function highlightNavItem(selectedNavItem) {
        document.querySelectorAll('.nav-menu').forEach(navItem => {
            navItem.classList.remove('active');
        });
        selectedNavItem.classList.add('active');
    }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
});

