// 点击事件
let head = document.querySelectorAll('.head p');
let arr = [
    './home.html?username='
    ,'./used_car.html?username='
    ,'./newcar.html?username='
    ,'./sellingcar.html?username='
    ,'./customer.html?username='
];
head.forEach(function(item,i){
    item.onclick = () => {
        window.location.href = arr[i] + i;
        head.forEach(item =>{
            item.className = ''
        })
            item.className = 'head-p'
    };
    console.log(item,i);
})
head[GetRequest().username].className = 'head-p';


//  解析参数
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}


