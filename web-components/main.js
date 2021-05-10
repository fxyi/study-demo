class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow( { mode: 'closed' } );
    console.log('shadow', shadow)

    var templateElem = document.getElementById('userCardTemplate');
    /**
     * template 是模板
     * 克隆它的所有子元素进行实例化
     */
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.box>.name').innerText = this.getAttribute('name');
    content.querySelector('.box>.email').innerText = this.getAttribute('email');


    shadow.appendChild(content);
  }
}
window.customElements.define('user-card', UserCard);