console.log("Starting");
import './style.css';
import { navBarModule } from './nav-bar.js';
import { HomePageModule } from './Home-page.js';
import LoadContact from './Contact.js';
import LoadMenu from './Menu.js';

(() => {

    let page = {
        content: document.getElementById('content'),

        init: function () {
            this.content.appendChild(navBarModule.nav);
            page.LoadHome();

        },

        AddGlobalEventListener: function (type, selector, callback) {
            document.addEventListener(type, (e) => {

                if (e.target.matches(selector)) {
                    callback(e);
                }
            });
        },


        DeleteHome: function () {
            this.content.removeChild(HomePageModule.home);
        },

        DeleteMenu: function () {
            console.log("menu deleted");
        },

        DeleteContact: function () {
            console.log("Contact deleted");
        },

        LoadHome: function () {
            page.DeleteMenu();
            page.DeleteContact();
            page.content.appendChild(HomePageModule.home);
        },

        LoadMenu: function () {
            page.DeleteHome();
            page.DeleteContact();
            console.log("menu loaded");
        },

        LoadContact: function () {
            page.DeleteHome();
            page.DeleteMenu();
            console.log("Contact loaded");
        },
    }
    page.init();

    page.AddGlobalEventListener("click", ".Home", page.LoadHome);
    page.AddGlobalEventListener("click", ".Menu", page.LoadMenu);
    page.AddGlobalEventListener("click", ".Contact", page.LoadContact);

})();
