function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
    console.log(this.routes);
    console.log(this.currentUrl);
};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();

function ajaxHtml(url) {
    $.ajax({
        url:url+".html",
        context:$("#bodyarticle"),
        success:function (result) {
            console.log(result);
            // let homrHtml=$("#bodyarticle");
            this.html("");
            this.html(result);
        }
    })
}
(function () {
    Router.route('/', function() {
        ajaxHtml('./index/index');
    });
})()
$(document).ready(function () {
    // 导航动态样式
    $('#navasel>a').click(function () {
        $('#navasel>a').removeClass('selectnava');
        $(this).addClass('selectnava');
    });
    // 主页面
    Router.route('/', function() {
        ajaxHtml('./index/index');
    });
// 媒体报道
    Router.route('/media', function() {
        ajaxHtml('./media/media');
    });
// 联系我们
    Router.route('/jionus', function() {
        ajaxHtml('./jionus/jionus');
    });
});
