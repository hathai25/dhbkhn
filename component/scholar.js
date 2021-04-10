const style=`
    .main-content{
        display:flex;    
        margin-left: -10px;
        margin-right: -10px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgb(232, 232, 232);
        height:65px;
        cursor:pointer;
    }
    .img{
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items:center;
    }
    img{
        width:70px;
        height:50px;
    }
    .content{
        font-size: 14px;
        // padding-left: 10px;
        // padding-right: 10px;
        padding: 10px 6px;
    }
`

class ScholarCard extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.img=this.getAttribute('img');
        this.title=this.getAttribute('title');
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="sub-container">
            <div class="main-content">
                <div class="img">
                    <img src="${this.img}">
                </div>
                <div class="content">
                    <div class="h3">${this.title}</div>
            </div>
        </div>
        `
    }
}

window.customElements.define('card-scholar',ScholarCard)

