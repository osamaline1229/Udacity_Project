// JavaScript for smooth scrolling and hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.addEventListener('scroll', function () {
        let sections = document.querySelectorAll('.section');
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            let sectionId = section.getAttribute('id');
            let sectionTop = section.offsetTop;
            let sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    });
});



function selectFeature(featureNum) {
    // Remove 'selected' class from all features
    var features = document.querySelectorAll('.feature');
    features.forEach(function(feature) {
        feature.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked feature
    var selectedFeature = document.querySelector('.feature:nth-of-type(' + featureNum + ')');
    selectedFeature.classList.add('selected');
}
