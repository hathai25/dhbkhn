const style=`
.main{
    margin-top:50px;
}
.title{
    font-size: 15px;
    font-style: italic;
    margin-top: 35px;
    text-align: center;
}
`

class VideoDemo extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="main">
        <iframe width="400" height="225" src="https://www.youtube.com/embed/p1tQRxsaYNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="title">Dạo quanh Bách khoa Hà Nội</div>
        </div>
        `
    }
}

window.customElements.define('video-demo',VideoDemo)