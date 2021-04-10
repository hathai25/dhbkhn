const style=`
    .container{
        margin-left: -10px;
        margin-right: -10px;
        display: flex;
        margin-bottom:15px;
    }
    .left-column{
        padding-left: 10px;
        padding-right: 10px;
        word-wrap:break-word;
        width: 66.66667%;
    }
    .right-column{
        padding-left: 10px;
        padding-right: 10px;
        word-wrap:break-word;
        width: 33.33333%;
    }
    h2{
        font-weight: 500;
        text-transform: uppercase;
        color: #130f40;
        font-size: 21px;
    }
    .news-container{
        background-color: rgb(243, 243, 243);
        position:relative;
        display:flex;
    }
    .h4{
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    .content{
        font-size: 14px;
        line-height: 22px;
    
    }
    img{
        border-style: none;
    }
    .image{
        width: 50%;
    }
    .text{
        width:50%;
        padding: 15px;
    }
    .slide {
        height: 287px;
        position: relative;
    }
    #content-event{
        position: absolute;
        left: 0;
        bottom: 9px;
        width: 100%;
        background-color: rgba(0,0,0,.7);
        cursor:pointer;
    }
    .date{
    padding: 5px 10px;
    width: max-content;
    color: white;
    font-size: 14px;
    background-color: rgba(8, 56, 127, 0.5);
    }
    .title{
        padding: 5px;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    }
    .time{
        padding: 5px;
        font-size: 12px;
        color: white;
        font-style: italic;
    }
    .slide img{
        height: 97%;
    }

    @media screen and (max-width: 767px){
        .container{
            display:contents;
        }
        .left-column{
            width:100%;
        }
        .right-column{
            width:100%;
        }
    }
`

class News extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
            <div class="container">
                <div class="left-column">
                   <h2 class="h2">chào mừng đến với cổng thông tin sinh viên</h2>
                   <div class="news-container">
                        <div class="image">
                            <img src="https://ctsv.hust.edu.vn/img/BK.jpg" width="100%"/>
                        </div>
                        <div class="text">
                            <h4 class="h4">Giới thiệu Công tác Sinh viên</h4>
                            <div class="content">
                                Trường ĐHBK Hà Nội coi công tác sinh viên là một trong những nhiệm vụ trọng tâm của Trường. Ban Giám hiệu luôn quan tâm, chỉ đạo sát sao về công tác chuyên môn nghiệp vụ nhằm tạo điều kiện thuận lợi cho sinh viên được học tập trong môi trường tốt nhất, được nghiên cứu khoa học, tu dưỡng và rèn luyện tác phong, đạo đức, tham gia các phong trào Thể thao - Văn hóa và các hoạt động xã hội khác
                            </div>
                        </div>
                   </div>
                </div>
                <div class="right-column">
                    <h2 class="h2">sự kiện</h2>
                    <div class="slide">
                        <img src="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadImageAcitivity?AId=559" width="100%"/>
                        <a href="https://ctsv.hust.edu.vn/#/hoat-dong/559/chi-tiet"></a>
                        <div id="content-event">
                            <div class="date">
                                28/12/2020
                            </div>
                            <div class="title">
                                Hội thảo hướng nghiệp đhbkhn
                            </div>
                            <div class="time">
                                00:00, Online
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

window.customElements.define('news-demo',News)