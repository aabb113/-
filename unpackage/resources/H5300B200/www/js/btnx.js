mui.init();
// 接收数据
var btnchair1 = document.getElementById("btnchair1");
var sumSofa = document.getElementById("sumSofa")
// 在底部选项卡中添加选定物品
btnchair1.addEventListener('change', function() {
        document.getElementById("valSofa2").value=objSofa2.value;
		document.getElementById("val_Sofa2").value=objSofa2.value;
	if (btnchair1.value != 0) {
		 document.getElementById("sofaList").style.display="block";
		 document.getElementById("sofa_List2").style.display="block";
	}else{
		document.getElementById("sofaList2").style.display="none";
		document.getElementById("sofa_List2").style.display="none";
	}
});
var objSofa2={};
Object.defineProperty(objSofa2,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btnchair1.value;
	},
	//有人修改时调用
	set(value){
		btnchair1.value=value;
	}
})
 document.getElementById("valSofa2").addEventListener('change',function(){
	      objSofa2.value = document.getElementById("valSofa2").value;
		  document.getElementById("val_Sofa2").value=document.getElementById("valSofa2").value;
		  console.log("success");
 })





