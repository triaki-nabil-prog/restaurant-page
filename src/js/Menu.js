import itemOne from '../img/item-one.png';
import itemTwo from '../img/item-two.png';
import itemThree from '../img/item-three.png';
import itemFour from '../img/item-four.png';


let MenuPageModule = (() => {

    let _MenuPage = {
        _createHtmlElements: function () {
            this._menu = document.createElement('div');
            this._MyitemOne= new Image();
            this._MyitemTwo= new Image();
            this._MyitemThree= new Image();
            this._MyitemFour= new Image();
            this._menuItemOne = document.createElement('div');
            this._menuItemTwo = document.createElement('div');
            this._menuItemThree = document.createElement('div');
            this._menuItemFour = document.createElement('div');

        },
        _renderHtml: function () {
            this._MyitemOne.src=itemOne;
            this._MyitemTwo.src=itemTwo;
            this._MyitemThree.src=itemThree;
            this._MyitemFour.src=itemFour;
            this._menuItemOne.textContent="Beef Burger";
            this._menuItemTwo.textContent="DOUBLE Beef Burger";
            this._menuItemThree.textContent="Chicken Burger";
            this._menuItemFour.textContent="DOUBLE Chicken Burger";

            this._menu.classList.add("Menu");


            this._menu.appendChild(this._MyitemOne);
            this._menu.appendChild(this._menuItemOne);
            this._menu.appendChild(this._MyitemTwo);
            this._menu.appendChild(this._menuItemTwo);
            this._menu.appendChild(this._MyitemThree);
            this._menu.appendChild(this._menuItemThree);
            this._menu.appendChild(this._MyitemFour);
            this._menu.appendChild(this._menuItemFour);
        },
    }

    _MenuPage._createHtmlElements();
    _MenuPage._renderHtml();
    return { menu: _MenuPage._menu }
})();
export { MenuPageModule };