const style=`
    .main{
        width:inherit;
    }
    .main img{
        width:100%;
        position: relative;
        overflow: hidden;
    }
`

class banner extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="main">
            <img src="https://ctsv.hust.edu.vn/static/img/banner-home.d4038b4b.png"/>
        </div>
        `
    }
}

window.customElements.define('banner-page',banner)