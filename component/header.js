const style=`
    .header{
        display:flex;
        background-image: url("https://ctsv.hust.edu.vn/static/img/header.d33c209a.jpg");
        background-size: cover;
        padding: 10px 150px;
        max-width:100%;
    }
    .banner{
        cursor:pointer;
    }
    .info{
        display:flex;
        position: absolute;
    top: 30px;
    right: 150px;
    }
    .info-name{
        line-height: 1.4167em;
    }
    .info img{
        object-fit: cover;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin-right: 10px;
        margin-top: -5px;
        position: relative;
        display: inline-block;
        overflow: hidden;
    }
    .wel, .name{
        font-weight:600;
        color: #444;
    }
    .wel{
        font-size:14px;
    }
    .name{
        font-size:16px;
    }
    @media screen and (max-width: 767px){
        .header{
            padding: 10px 5px 20px;
        max-width: 100%;
        display:grid
        }
        .info{
            right:auto;
            position:inherit;
        }
    }
`

class BKHeader extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>${style}</style>
            <div class="header">
            <div class="banner">
            <img src="https://ctsv.hust.edu.vn/static/img/hust.686b5882.png"/>
            </div>
            <div class = "info">
            <img src="https://ctsv.hust.edu.vn/static/img/ictsv150.a560475b.png"/>
            <div class= "info-name">
                <div class="wel">
                    Xin chào
                </div>
                <div class="name">
                    Nguyen Van A <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
            </div>
            </div>
            </div>
        `
    }
}

window.customElements.define('bk-header',BKHeader)