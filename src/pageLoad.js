const pageLoad = () => {
    const pageContent = document.getElementById('content');
    const header = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    header.appendChild(home);
    home.textContent = "Home";
    header.appendChild(menu);
    menu.textContent = "Menu";
    header.appendChild(contact);
    contact.textContent = "Contact";

    pageContent.appendChild(header);

    // const homeMain = document.createElement('div');
    // homeMain
};

export { pageLoad };