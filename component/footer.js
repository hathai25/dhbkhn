const style=`
    .footer{
        margin-top:20px;
        background: #aa261b;
        padding: 0 150px;
    }
    .main{
        background-image: url("https://ctsv.hust.edu.vn/static/img/footer.0a92c992.jpg");
    background-size: 100% 100%;
    text-align:center;
    height: 200px;
    color: #fff;
    line-height: 1.4em;
    }
    .introduce{
        padding-top: 20px;
    font-size: 18px;
    }
    .email{
        font-size:14px;
    }
    @media screen and (max-width: 767px){
        .introduce{
            font-size: 14px;
        }
        .email{
            font-size:12px;
        }
    }
`

class BKFooter extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="footer">
            <div class="main">
                <div class="introduce">Các thông tin, dịch vụ được cập nhật và vận hành bởi phòng Công tác Sinh Viên </div>
                <div class="email">Email: ctsv@hust.edu.vn - Tel: +84(0)24 3869 3108 - Địa chỉ: P102..105 nhà C1</div>
            </div>
        </div>
        `
    }
}

window.customElements.define('bk-footer',BKFooter)