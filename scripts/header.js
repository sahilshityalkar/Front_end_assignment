const MenuIcon = document.querySelector('.menu-icon');
const MobileMenu = document.querySelector('.mobile-menu');

MenuIcon.addEventListener('click', () => {
    if (MobileMenu.style.display === 'none' || MobileMenu.style.display === '') {
        MobileMenu.style.display = 'flex';
    }
    else {
        MobileMenu.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const dropbtn = document.querySelector('.dropbtn img');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const newFlagSrc = this.querySelector('img').src;
            dropbtn.src = newFlagSrc;
        });
    });
});