import { pageLoad } from "./functions/pageLoad";
import { homeLoad } from "./functions/home";
import { menuLoad } from "./functions/menu";
import { cleanPage } from "./functions/cleanPage";
import './styles/style.css';

pageLoad();
homeLoad();

// teste.querySelectorAll('*').forEach(content => content.remove())