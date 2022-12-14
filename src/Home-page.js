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
            this._intro = document.createElement('div');

        },
        _renderHtml: function () {
            this._myLogo.src = Logo;
            this._name.textContent = "teriyaki's";
            this._type.textContent = "Grill House";
            this._about.textContent = "teriyaki's was created after a family came together to start a business";
            this._intro.textContent = "The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.";
            
            this._home.classList.add("Home");
            this._logoWrap.classList.add("logo");
            this._name.classList.add("Name");
            this._type.classList.add("Type");
            this._about.classList.add("about1");
            this._intro.classList.add("about2");

            this._logoWrap.appendChild(this._myLogo);
            this._home.appendChild(this._logoWrap);
            this._home.appendChild(this._name);
            this._home.appendChild(this._type);
            this._home.appendChild(this._about);
            this._home.appendChild(this._intro);
        },
    }

    _HomePage._createHtmlElements();
    _HomePage._renderHtml();
    return { home: _HomePage._home }
})();
export { HomePageModule };



