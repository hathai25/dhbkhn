const style=`
    .sub-container{
        border: 1px solid hsla(0,0%,92.9%,.8);
        padding: 5px;
        overflow: hidden;
        font-size: 14px;
        position: relative;
        cursor:pointer;
        //max-height: 82px;
        //width: 50%;
    }
    .content{
        width:100%;
    }
    .main-content{
        display:flex;
    }
    .img img{
        width: 60px;
        height: 60px;
        margin-right: 8px;
    }
    .benefit{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
    }
    .location{
        color: #8e44ad;
    }
    .gross{
        color: #e84393;

    }
    .h3{
        overflow: hidden;
    margin-top: 0;
    margin-bottom: 5px;
    color: #57606f;
    font-weight: 550;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    }
`
class Card extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this.img=this.getAttribute('img');
        this.title=this.getAttribute('title');
        this.detail=this.getAttribute('detail');
        this.location=this.getAttribute('location');
        this.gross=this.getAttribute('gross');  
        this._shadowRoot.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>${style}</style>
        <div class="sub-container">
            <div class="main-content">
                <div class="img">
                    <img src="${this.img}">
                </div>
                <div class="content">
                    <h3 class="h3">${this.title}</h3>
                    <div class="name-company">${this.detail}</div>
                    <div class="benefit">
                        <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i>
                        ${this.location}</div>
                        <div class="gross"><i class="fa fa-usd" aria-hidden="true"></i>
                        ${this.gross}</div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define('card-company',Card)