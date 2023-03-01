mui.init();
// 接收数据
var share_Html = document.getElementById("shareHtml");

share_Html.addEventListener('tap',function(event){
	mui.alert("分享成功！", null, "确定");
	console.log("success")
})