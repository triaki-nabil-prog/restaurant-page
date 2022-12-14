console.log("Starting");
import './style.css';
import {navBarModule} from './nav-bar.js';
import {HomePageModule} from './Home-page.js';
import LoadContact from './Contact.js';
import LoadMenu from './Menu.js';





(() => {

    let page = {
        content: document.getElementById('content'),
        // HomeButton: document.getElementById('Home'),
        // MenuButton: document.getElementById('Menu'),
        // ContactButton: document.getElementById('Contact'),

        init: function () {
            page.content.appendChild(navBarModule.nav);
            page.content.appendChild(HomePageModule.home);
            
        }
    }
    page.init();
    
})();
