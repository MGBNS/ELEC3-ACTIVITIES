const navItems = document.querySelectorAll('ul li');

navItems.forEach(item => {
    const link = item.querySelector('a');
    const dropdownMenu = item.querySelector('.dropdown');
    
    item.addEventListener('mouseover', () => {
        if (link) link.style.background = '#112C66';
        if (dropdownMenu) dropdownMenu.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        if (link) link.style.background = '';
        if (dropdownMenu) dropdownMenu.style.display = 'none';
    });
});