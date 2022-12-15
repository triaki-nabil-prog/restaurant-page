

let ContactPageModule = (() => {

    let _ContactPage = {
        _createHtmlElements: function () {
            this._contact = document.createElement('div');

        },
        _renderHtml: function () {
            this._contact.classList.add("Contact");
        },
    }

    _ContactPage._createHtmlElements();
    _ContactPage._renderHtml();
    return { contact: _ContactPage._contact }
})();
export { ContactPageModule };