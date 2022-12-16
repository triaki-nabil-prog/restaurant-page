

let ContactPageModule = (() => {

    let _ContactPage = {
        _createHtmlElements: function () {
            this._contact = document.createElement('div');
            this._map= document.createElement('div');
            this._card= document.createElement('div');
            this._adress=document.createElement('div');
            this._phone=document.createElement('div');
            this._email=document.createElement('div');
            this._WorkH=document.createElement('div');


        },
        _renderHtml: function () {
            this._contact.classList.add("Contact");
            this._map.classList.add("Map");
            this._card.classList.add("contact-card");
            this._map.innerHTML = `  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12785.236673919326!2d3.4616181971443583!3d36.76314997102222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e6974f2c3c363%3A0x265bc42e3974f13a!2sBurger%20Factory!5e0!3m2!1sen!2sdz!4v1671192437243!5m2!1sen!2sdz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;


            this._adress.textContent="Adress : Algeria Boumerdes";
            this._phone.textContent="Number : +999 0999 99 99 99";
            this._email.textContent="Email : burger-factory@gmail.com";
            this._WorkH.textContent="Open all week from 10am to 10pm"


            this._card.appendChild(this._adress);
            this._card.appendChild(this._phone);
            this._card.appendChild(this._email);
            this._card.appendChild(this._WorkH);

            this._contact.appendChild(this._map);
            this._contact.appendChild(this._card);
        },

    }



    _ContactPage._createHtmlElements();
    _ContactPage._renderHtml();
    return { contact: _ContactPage._contact }
})();
export { ContactPageModule };