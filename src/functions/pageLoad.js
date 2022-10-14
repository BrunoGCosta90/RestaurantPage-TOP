import Background from '../images/clickwallpapers-pao-de-queijo-brazil-img2.jpg';
import { cleanPage } from './cleanPage';
import { contactLoad } from './contact';
import { homeLoad } from './home';
import { menuLoad } from './menu';

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
    home.id = 'home-button';
    header.appendChild(menu);
    menu.textContent = "Menu";
    menu.id = 'menu-button';
    header.appendChild(contact);
    contact.textContent = "Contact";
    contact.id = 'contact-button';
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

    // add event to menu buttons

    header.addEventListener('click', event => {
        switch (event.target.id) {
            case 'home-button':
                cleanPage();
                homeLoad();
                break;
            case 'menu-button':
                cleanPage();
                menuLoad();
                break;
            case 'contact-button':
                cleanPage();
                contactLoad();
                break;
            default:
                return;
        }
    })

};

export { pageLoad };