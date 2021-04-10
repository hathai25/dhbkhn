const style=`
    .container{
        color: #fff;
        height: 28vh;
        background-size: 100%;
        background-image: url("https://ctsv.hust.edu.vn/static/img/backgroup-rank.f1985ecd.jpg")
    }
    .main{
        height:100%;
        display: flex;
    }
    .activity{
        width: 33.33333%;
        text-align:center;
        margin-top:20px;
    }
    .title{
        text-transform: uppercase;
        font-size:14px;
    }
    .detail{
        font-size:13px;
    }
`

class Event extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="container">
            <div class="main">
                <div class="activity">
                    <div class="img">
                        <img src="https://ctsv.hust.edu.vn/static/img/icon-action.225a0059.png">
                    </div>
                    <div class="content">
                        <h4 class="title">hoạt động</h4>
                        <div class="detail">
                            250 hoạt động ngoại khóa mỗi học kỳ<br>
                            150,000 lượt sinh viên tham gia hoạt động
                        </div>
                    </div>
                </div>
                <div class="activity">
                    <div class="img">
                        <img src="https://ctsv.hust.edu.vn/static/img/icon-scholarship.5bb61866.png">
                    </div>
                    <div class="content">
                        <h4 class="title">học bổng</h4>
                        <div class="detail">
                            >20 tỷ tiền học bổng dành cho sinh viên mỗi học kỳ<br>
                            >2000 sinh viên nhận học bổng mỗi học kỳ
                        </div>
                    </div>
                </div>
                <div class="activity">
                    <div class="img">
                        <img src="https://ctsv.hust.edu.vn/static/img/icon-rank.799aa79e.png">
                    </div>
                    <div class="content">
                        <h4 class="title">hướng nghiệp</h4>
                        <div class="detail">
                        > 50 doanh nghiệp phối hợp tổ chức hướng nghiệp<br>
                        > 6.000 lượt sv tham gia hướng nghiệp và ứng tuyển
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

window.customElements.define('event-area',Event)