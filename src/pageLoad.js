import Background from './clickwallpapers-pao-de-queijo-brazil-img2.jpg';

const pageLoad = () => {
    //document.body.style.backgroundImage = `url(${Background})`;
    const pageContent = document.getElementById('content');
    const header = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const main = document.createElement('div');
    const footer = document.createElement('footer');
    const author = document.createElement('div');
    const gitLink = document.createElement('a');

    header.appendChild(home);
    home.textContent = "Home";
    header.appendChild(menu);
    menu.textContent = "Menu";
    header.appendChild(contact);
    contact.textContent = "Contact";
    pageContent.appendChild(header);

    main.id = "main";
    pageContent.appendChild(main);
    
    gitLink.text = "GitHub";
    gitLink.href = "https://github.com/BrunoGCosta90";
    author.textContent = "Bruno Costa @ ";
    author.appendChild(gitLink);
    footer.appendChild(author);
    pageContent.appendChild(footer);

    //styles

    pageContent.style.backgroundImage = `url(${Background})`;
    pageContent.classList.add('content')

    header.classList.add('menu-tabs')

    // const homeMain = document.createElement('div');
    // homeMain
};

export { pageLoad };