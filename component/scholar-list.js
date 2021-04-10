const style=`
    .title{
    text-transform:uppercase;
    font-weight: 500;
    font-size:20px;
    }   
`
class ScholarList extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="container">
            <h2 class="title">Danh sách học bổng</h2>
            <div class="detail">
            <card-scholar img="https://ctsv.hust.edu.vn/static/img/scholarship.69a12335.png" title="Học bổng học kì 20202 của Công ty TNHH Đầu Tư Xây dựng và Công Nghệ Môi Trường Dương Nhật"></card-scholar>
            <card-scholar img="https://ctsv.hust.edu.vn/static/img/scholarship.69a12335.png" title="Học bổng Daizo Tec năm học 2021-2022"></card-scholar>
            <card-scholar img="https://ctsv.hust.edu.vn/static/img/scholarship.69a12335.png" title="Học bổng Lotte kì 20202"></card-scholar>
    
            <card-scholar img="https://ctsv.hust.edu.vn/static/img/scholarship.69a12335.png" title="HỌC BỔNG CỦA ONE MOUNT GROUP 2021"></card-scholar>
            </div>
        </div>
        `
    }
}

window.customElements.define('scholar-list',ScholarList)