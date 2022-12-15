console.log("Starting");
import './style.css';
import { navBarModule } from './nav-bar.js';
import { HomePageModule } from './Home-page.js';
import { MenuPageModule } from './Menu.js';
import { ContactPageModule } from './Contact.js';


(() => {

    let _page = {
        _content: document.getElementById('content'),

        _init: function () {
            this._content.appendChild(navBarModule.nav);
            _page._LoadHome();

        },

        _AddGlobalEventListener: function (type, selector, callback) {
            document.addEventListener(type, (e) => {

                if (e.target.matches(selector)) {
                    callback(e);
                }
            });
        },

        _DeleteHome: function () {
            if(this._content.lastChild.matches(".Home"))
            this._content.removeChild(HomePageModule.home);
        },

        _DeleteMenu: function () {
            if(this._content.lastChild.matches(".Menu"))
            this._content.removeChild(MenuPageModule.menu);
        },

        _DeleteContact: function () {
            if(this._content.lastChild.matches(".Contact"))
            this._content.removeChild(ContactPageModule.contact);
        },

        _LoadHome: function () {
            _page._DeleteMenu();
            _page._DeleteContact();
            console.log(HomePageModule.home);
            _page._content.appendChild(HomePageModule.home);
        },

        _LoadMenu: function () {
            _page._DeleteHome();
            _page._DeleteContact();
            _page._content.appendChild(MenuPageModule.menu);
        },

        _LoadContact: function () {
            _page._DeleteHome();
            _page._DeleteMenu();
            _page._content.appendChild(ContactPageModule.contact);
        },
    }
    _page._init();

    _page._AddGlobalEventListener("click", ".Home", _page._LoadHome);
    _page._AddGlobalEventListener("click", ".Menu", _page._LoadMenu);
    _page._AddGlobalEventListener("click", ".Contact", _page._LoadContact);

})();
