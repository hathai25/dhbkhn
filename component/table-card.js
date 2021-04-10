const style=`
    .container{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }
    .card{
        padding:5px;
    }
    .tabs_header{
        padding: 0;
        position: relative;
        margin: 0 0 15px;
    }
    .nav-tabs{
        overflow: hidden;
        margin-bottom: -1px;
        position: relative;
    }
    .nav{
        margin-left: -35px;
        list-style-type:none;
        display:flex;
    }
    li{
        margin-right:30px;
        cursor:pointer;
    }
    hr{
        margin-top:-15px;
    }
    li:hover {
        color: #409eff;
    }
    .number{
        padding: 10px 0;
        display:flex;
        justify-content:center;
    }
    .num{
        list-style-type:none;
        display:flex;
        font-size:12px;
        font-weight:bold;
        margin-top:2px;
    }

    i{
        cursor:pointer;
    }
    i:hover {
        color: #409eff;
    }
`

class TableCard extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>${style}</style>
        <div class="tabs_header">
            <div class="nav-tabs">
                <ul class="nav">
                    <li>Việc làm hot</li>
                    <li>Việc làm mới</li>
                    <li>Thực tập</li>
                    <li>Part time</li>
                    <li>Công ty</li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="container">
            <card-company class="card" img="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=42" title="[FPT Software] Fresher iOS / Swift" detail="Tập đoàn FPT" location="Hà Nội" gross="10-12 Triệu"></card-company>
            <card-company class="card" img="http://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=70" title="Sinh viên tài năng" detail="Tập đoàn Công nghệ - Viễn thông Quân đội" location="Hà Nội" gross="12-15 Triệu"></card-company>
            <card-company class="card" img="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=68" title="CHƯƠNG TRÌNH TUYỂN DỤNG GIÁM ĐỐC TƯƠNG LAI CRYSTAL ASSOCIATE PROGRAMME 2021 CỦA TẬP ĐOÀN CRYSTAL INTERNATIONAL" detail=" CÔNG TY TNHH CRYSTAL MARTIN (VIỆT NAM)" location="Hà Nội" gross="20-25 Triệu"></card-company>
            <card-company class="card" img="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=56" title="PENTEST" detail="Ngân hàng TMCP Quân đội" location="Hà Nội" gross="Theo thỏa thuận"></card-company>
            <card-company class="card" img="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=56" title="Developer (Java, .NET, C/ C++...)" detail="Ngân hàng TMCP Quân đội" location="Hà Nội" gross="Theo thỏa thuận"></card-company>
            <card-company class="card" img="https://ctsv.hust.edu.vn/api-t/UploadFile/CTSV/DownloadLogoCompany?CompanyId=55" title="Fresh Engineer graduate in 2021 (12-15 mil)" detail="Công ty TNHH Hanwha Engines" location="Hà Nội" gross="12-15 Triệu"></card-company>
        </div>
        <div class="number">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
            <ul class="num">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        `
    }
}

window.customElements.define('table-card',TableCard)