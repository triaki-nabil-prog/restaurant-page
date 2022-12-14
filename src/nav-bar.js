let navBarModule = (() => {

    let _navBar = {
        _createHtmlElements: function(){
            this._nav = document.createElement('header');
            this._HomeButton = document.createElement('button');
            this._MenuButton = document.createElement('button');
            this._ContactButton = document.createElement('button');
        },
        _renderHtml: function () {
            this._nav.classList.add("Nav-bar");
            this._HomeButton.classList.add("Menu");
            this._MenuButton.classList.add("Home");
            this._ContactButton.classList.add("Contact");
            
            this._HomeButton.textContent = 'Home';
            this._MenuButton.textContent = 'Menu';
            this._ContactButton.textContent = 'Contact';

            this._nav.appendChild(this._HomeButton);
            this._nav.appendChild(this._MenuButton);
            this._nav.appendChild(this._ContactButton);
        },
    }

    _navBar._createHtmlElements();
    _navBar._renderHtml();
    return { nav: _navBar._nav }
})();
export { navBarModule };



