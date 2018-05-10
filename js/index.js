$(document).ready(function () {
    //
    const urlHref=["","./index/llgwbit.html","./index/rdcenter.html","./index/lleducation.html","",""];
    $('.contentadiv>div').click(function () {
        console.log($(this).index());
        let index=($(this).index());

        window.location.href=urlHref[index];
    });
});