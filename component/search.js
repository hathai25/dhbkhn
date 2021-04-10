const style=`
    .h2{
        font-weight: 500;
        text-transform: uppercase;
        font-size:22px;
    }
    .input{
        padding: 20px;
        background-color: #f3f3f3;
        margin-top: 20px;
        font-size: 14px;
    }


    #browser, #browser2, #browser3{
        width:92%;
        font-size: 12px;
        padding: 10px;
        height: 40px;
    line-height: 40px;
    padding: 0 15px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    
    }

    #browser:focus{
        border-color: #409eff;
        
    }

    #browser2:focus{
        border-color: #409eff;
    }

    #browser3:focus{
        border-color: #409eff;
    }

    .button{
        display: flex;
    justify-content: center;
    }
    #submit{
        cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    }

    #submit:hover {
        color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    }
`
class SearchBox extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="container">
            <h2 class="h2">tìm kiếm</h2>
            <div class="input">
                <div class="title">
                Các bạn sinh viên có thể tìm kiếm các thông tin hướng nghiệp tại đây
                </div>
                <p>
                <input list="browsers" name="browser" id="browser" placeholder="Lựa chọn ngành nghề">
                <datalist id="browsers">
                  <option value="Công nghệ thông tin">
                  <option value="Kỹ thuật cơ khí">
                  <option value="Kỹ thuật cơ điện tử">
                  <option value="Kỹ thuật sinh học">
                  <option value="Kỹ thuật hóa học">
                </datalist>
                </p>

                <p>
                <input list="browsers2" name="browser2" id="browser2" placeholder="Lựa chọn nơi làm việc">
                <datalist id="browsers2">
                  <option value="TP Hà Nội">
                  <option value="TP Hồ Chí Minh">
                  <option value="TP Hải Phòng">
                  <option value="Tỉnh Thanh Hóa">
                  <option value="Tình Nghệ An">
                </datalist>
                </p>

                <p>
                <input list="browsers3" name="browser3" id="browser3" placeholder="Loại công việc">
                <datalist id="browsers3">
                  <option value="Toàn thời gian cố định">
                  <option value="Toàn thời gian tạm thời">
                  <option value="Theo hợp đồng / Tư vấn">
                  <option value="Thực tập">
                  <option value="Khác">
                </datalist>
                </p>
                <div class="button">
                <button type="button" id="submit">Tìm kiếm</button>
                </div>
            </div>
        </div>    
        `
    }
}

// <div class="text_area">
//                         <section class="job">
//                             <select id="job">
//                                 <option>Điện tử viễn thông</option>
//                                 <option>Công nghện thông tin</option>
//                                 <option>Kỹ thuật cơ khí</option>
//                                 <option>Kỹ thuật cơ điện tử</option>
//                                 <option>Kỹ thuật hóa học</option>
//                             </select>
//                         </section>
//                     </div>

window.customElements.define('search-box',SearchBox)