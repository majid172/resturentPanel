document.querySelectorAll('.sidebar-menu-item.has-dropdown > a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
});
