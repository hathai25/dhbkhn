const style=`
    .title{
        text-transform:uppercase;
        font-weight: 500;
        font-size:20px;
    }
    .content{
        font-size:14px;
        text-align: justify;
        
    }
    .list-act{
        list-style-type:none;
        margin-left:-40px;
        font-size:14px;
        cursor: pointer;
        color: #333;
        
    }
    li{
        transition: all .3s ease;
    }
    li:hover{
        transform: scale(1.2) translate(8.2%);
    }
`

class Activity extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="container">
            <h2 class="title">các hoạt động nổi bật</h2>
            <div class="content">
            Trường Đại học Bách Khoa Hà Nội chính thức sử dụng cổng thông tin mới phục vụ công tác đào tạo, trao đổi thông tin của trường với sinh viên và học viên.
            </div>
            <div class="detail">
                <ul class="list-act">
                    <li>Đăng ký tham gia hoạt động ngoại khóa</li><hr>
                    <li>Tra cứu kết hoạch, kết quả học tập</li><hr>
                    <li>Yêu cầu hỗ trợ thủ tục hành chính</li><hr>
                    <li>Đánh giá kết quả rèn luyện</li><hr>
                    <li>Ứng tuyển việc làm</li><hr>
                    <li>Đăng ký học bổng</li><hr>
                </ul>
            </div>
        </div>
        `
    }
}

window.customElements.define('activity-hot',Activity)