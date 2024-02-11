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
        });
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
                // Highlight navbar item corresponding to the section in view
                document.querySelectorAll('.nav-menu').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`a[href="#${sectionId}"]`).classList.add('active', 'custom-color');
            }

            // Highlight the section in the center of the viewport
            let viewportHeight = window.innerHeight;
            let sectionCenter = sectionTop + sectionHeight / 2;

            if (sectionCenter >= scrollPosition && sectionCenter <= scrollPosition + viewportHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });

    // Function to scroll to a section smoothly
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        const paddingTop = 150;
        const offset = section.offsetTop - paddingTop;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
});
