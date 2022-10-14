const menuLoad = () => {
    const pageContent = document.getElementById('main');

    const menuItem1 = document.createElement('div');
    menuItem1.textContent = 'Test';
    menuItem1.classList.add('card')
    pageContent.appendChild(menuItem1);
}

export { menuLoad };