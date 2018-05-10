(function () {
    const divjson=[
        {
            url:"./images/media/1.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },{
            url:"./images/media/2.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },{
            url:"./images/media/3.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },{
            url:"./images/media/4.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },{
            url:"./images/media/5.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },{
            url:"./images/media/6.png",
            text:"共享经济支持三农",
            texttwo:"迎来新模式"
        },
    ];
    let divHtml='';
    divjson.forEach(function (item) {
        divHtml+="<div><img src=\""+item.url+"\" width=\"100%\" height=\"100%\" alt=\"\"><div><span>"+item.text+"</span><span>"+item.texttwo+"</span></div></div>"
    })
    $(".media:eq(0)").append(divHtml);
})();
$(document).ready(function () {
    $(".media>div").hover(function () {
        $(this).find("div").show();
    },function () {
        $(this).find("div").hide();
    })
})