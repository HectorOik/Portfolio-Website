// set navbar active state
const navItems = document.querySelectorAll('.links li')

function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop();

    navItems.forEach(item => {
        const linkText = item.querySelector('a').getAttribute('href');
        if (linkText === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.onload = setActiveNavItem;

document.getElementById("back-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});