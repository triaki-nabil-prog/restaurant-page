import Logo from './logo.jpg';

let HomePageModule = (() => {

    let _HomePage = {
        _createHtmlElements: function () {
            this._home = document.createElement('div');
            this._logoWrap = document.createElement('div');
            this._myLogo = new Image();
            this._name = document.createElement('div');
            this._type = document.createElement('div');
            this._about = document.createElement('div');

        },
        _renderHtml: function () {
            this._myLogo.src = Logo;
            this._name.textContent = "BURGER FACTORY";
            this._type.textContent = "Best in Town";
            this._about.textContent = "The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.";
            
            this._home.classList.add("Home");
            this._logoWrap.classList.add("logo");
            this._name.classList.add("Name");
            this._type.classList.add("Type");
            this._about.classList.add("about");

            this._logoWrap.appendChild(this._myLogo);
            this._home.appendChild(this._logoWrap);
            this._home.appendChild(this._name);
            this._home.appendChild(this._type);
            this._home.appendChild(this._about);
        },
    }

    _HomePage._createHtmlElements();
    _HomePage._renderHtml();
    return { home: _HomePage._home }
})();
export { HomePageModule };



