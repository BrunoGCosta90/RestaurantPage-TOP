const menuLoad = () => {

    const pageContent = document.getElementById('main');

    const menuItem1 = document.createElement('div');
    const item1Title = document.createElement('p');
    item1Title.textContent = "Traditional";
    item1Title.classList.add('title');
    menuItem1.appendChild(item1Title);
    const item1description = document.createElement('p');
    item1description.textContent = "Sodales ut etiam sit amet nisl purus in mollis.";
    item1description.classList.add('centered');
    menuItem1.appendChild(item1description);
    menuItem1.classList.add('card');

    const menuItem2 = document.createElement('div');
    const item2Title = document.createElement('p');
    item2Title.textContent = "Salami";
    item2Title.classList.add('title');
    menuItem2.appendChild(item2Title);
    const item2description = document.createElement('p');
    item2description.textContent = "Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci.";
    item2description.classList.add('centered');
    menuItem2.appendChild(item2description);
    menuItem2.classList.add('card');

    const menuItem3 = document.createElement('div');
    const item3Title = document.createElement('p');
    item3Title.textContent = "Requeijão";
    item3Title.classList.add('title');
    menuItem3.appendChild(item3Title);
    const item3description = document.createElement('p');
    item3description.textContent = "Eget felis eget nunc lobortis mattis aliquam.";
    item3description.classList.add('centered');
    menuItem3.appendChild(item3description);
    menuItem3.classList.add('card');

    const menuItem4 = document.createElement('div');
    const item4Title = document.createElement('p');
    item4Title.textContent = "Griddled";
    item4Title.classList.add('title');
    menuItem4.appendChild(item4Title);
    const item4description = document.createElement('p');
    item4description.textContent = "Aliquam eleifend mi in nulla posuere sollicitudin.";
    item4description.classList.add('centered');
    menuItem4.appendChild(item4description);
    menuItem4.classList.add('card');

    const menuItem5 = document.createElement('div');
    const item5Title = document.createElement('p');
    item5Title.textContent = "Dulce de leche";
    item5Title.classList.add('title');
    menuItem5.appendChild(item5Title);
    const item5description = document.createElement('p');
    item5description.textContent = "Arcu vitae elementum curabitur vitae nunc sed velit.";
    item5description.classList.add('centered');
    menuItem5.appendChild(item5description);
    menuItem5.classList.add('card');
    
    pageContent.appendChild(menuItem1);
    pageContent.appendChild(menuItem2);
    pageContent.appendChild(menuItem3);
    pageContent.appendChild(menuItem4);
    pageContent.appendChild(menuItem5);
}

export { menuLoad };