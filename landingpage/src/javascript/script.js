$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active'); //adiciona essa classe
        $('mobile_btn').find(i).toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).scroll(function() {
        const header = $('header');
        const scrollPos = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPos <= 0) {
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }   

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReaveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20px'
    });

    ScrollReaveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20px'
    });

    ScrollReaveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20px'
    });

    ScrollReaveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20px'
    });
});