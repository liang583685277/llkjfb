(function () {
    let jsjs=[
        {
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        },{
            url:'../images/index/banner.png',
            name:'刘益',
            job:'资深架构师'
        }
    ];
    let aHtml="";
    jsjs.forEach(function (item) {
        aHtml+="<a><figure><div><img src=\""+item.url+"\" alt=\""+item.name+"\"></div><figcaption><p>"+item.name+"</p><hgroup>"+item.job+"</hgroup></figcaption></figure></a>"
    })
    $(".professor:eq(0)").append(aHtml);
})()