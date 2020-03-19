import './components/button.js'

const template = document.createElement('template')
template.innerHTML = `
<div>
    <h3 class="title">示例</h3>
    <my-button class="text-button"></my-button>
</div>
`;

class App extends HTMLElement {
    constructor() {
        super()
        this._shadow = this.attachShadow({mode: 'open'})
        this._shadow.appendChild(template.content.cloneNode(true))
        const myButton = this._shadow.querySelector('.text-button')
        myButton.addEventListener('onClick',this.handleButton.bind(this))
    }
    handleButton() {
        alert('my-button')
    }
}
window.customElements.define('my-app',App)