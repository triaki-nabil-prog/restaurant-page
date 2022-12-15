// import itemOne from './item-one.jpg';

let MenuPageModule = (() => {

    let _MenuPage = {
        _createHtmlElements: function () {
            this._menu = document.createElement('div');

        },
        _renderHtml: function () {
            this._menu.classList.add("Menu");
        },
    }

    _MenuPage._createHtmlElements();
    _MenuPage._renderHtml();
    return { menu: _MenuPage._menu }
})();
export { MenuPageModule };