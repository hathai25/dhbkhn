import './component/header.js'
import './component/banner.js'
import './component/news.js'
import './component/card-company.js'
import './component/table-card.js'
import './component/search.js'
import './component/event.js'
import './component/activity.js'
import './component/scholar.js'
import './component/scholar-list.js'
import './component/video.js'
import './component/footer.js'
import './component/navdrop.js'
const style=`
    .home-page{
        padding: 0 150px;
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
    .job{
        display:flex;
    }
    .act{
        margin-top:20px;
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
    }
    .scholar{
        padding-left: 10px;
        padding-right: 10px;
    }
    @media screen and (max-width: 767px){
        .home-page{
            padding:0px 10px;
        }
        .job{
            display:contents;
        }
        .left-column{
            width:100%;
        }
        .right-column{
            width:100%;
        }
        .act{
            display:contents;
        }
        .hot{
            width:100%;
        }
        .scholar{
            width:100%;
        }
        .vid{
            width:100%;
            display:flex;
            justify-content:center;
        }
    }
`
document.getElementById("app").innerHTML=`
    <style>${style}</style>
    <bk-header></bk-header>
    <nav-drop></nav-drop>
    <div class="home-page">
    <banner-page></banner-page>
    <news-demo></news-demo>
    <div class="job">
        <div class="left-column">
            <table-card></table-card>
        </div>
        <div class="right-column">
            <search-box></search-box>
        </div>
    </div>
    <event-area></event-area>
    <div class="act">
        <div class="hot">
            <activity-hot></activity-hot>
        </div>
        <div class="scholar">
            <scholar-list></scholar-list>
        </div>
        <div class="vid">
            <video-demo></video-demo>
        </div>
    </div>
    </div>
    <bk-footer></bk-footer>
`
