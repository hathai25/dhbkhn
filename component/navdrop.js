const style=`
.navbar {
    overflow: hidden;
    background-color: rgb(34, 34, 34);
    padding-left: 150px;
    font-size:14px;
    padding-top:5px;
    padding-bottom:5px;
  }
  
  .navbar a {
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .dropdown {
    float: left;
    overflow: hidden;
    
  }
  
  .dropdown .dropbtn {
    font-size: 14px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    margin: 0;
    text-transform: uppercase;
  }
  
  .dropdown-content {
    //margin-top: 10px;
    display: none;
    position: absolute;
    background-color: rgb(34, 34, 34);
    min-width: 160px;
    z-index: 1;
  }
  
  .dropdown-content a {
      font-size:12px;
    float: none;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  
    .dropdown-content a:hover {
        background-color: black;
    }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  @media screen and (max-width: 767px){
    .navbar{
        padding-left:0px;
    }
}
`

class NavDrop extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
            <style>${style}</style>
            <div class="navbar">
            <a href="#home">TRANG CHỦ</a>
            <div class="dropdown">
                <button class="dropbtn">ngoại khóa
                </button>
                <div class="dropdown-content">
                <a href="#">Sự kiện</a>
                <a href="#">Hoạt động</a>
                <a href="#">Tổ chức</a>
                </div>
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Tuyển dụng 
                </button>
                <div class="dropdown-content">
                <a href="#">Việc làm</a>
                <a href="#">Công ty</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">học bổng 
                </button>
                <div class="dropdown-content">
                <a href="#">DS Học bổng</a>
                <a href="#">Tôi đã đăng kí</a>
                </div>
            </div>  
            <a href="#news">CHẤM ĐIỂM</a>
            <div class="dropdown">
                <button class="dropbtn">hành chính
                </button>
                <div class="dropdown-content">
                <a href="#">Thông báo</a>
                <a href="#">Đăng ký</a>
                <a href="#">Yêu cầu</a>
                <a href="#">Hướng dẫn</a>
                </div>
            </div> 
            <a href="#news">APP ICTSV</a>
            </div>
        `
    }
}

window.customElements.define('nav-drop',NavDrop)