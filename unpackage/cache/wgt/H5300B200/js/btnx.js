mui.init();
// 接收数据
var btncabinet1 = document.getElementById("btncabinet1");
// 在底部选项卡中添加选定物品
btncabinet1.addEventListener('change', function() {
        document.getElementById("valCabinet1").value=objCabinet1.value;
		document.getElementById("val_Cabinet1").value=objCabinet1.value;
	if (btncabinet1.value != 0) {
		 document.getElementById("cabinetList1").style.display="block";
		 document.getElementById("cabinet_List1").style.display="block";
	}else{
		document.getElementById("cabinetList1").style.display="none";
		document.getElementById("cabinet_List1").style.display="none";
	}
});
var objCabinet1={};
Object.defineProperty(objCabinet1,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btncabinet1.value;
	},
	//有人修改时调用
	set(value){
		btncabinet1.value=value;
	}
})
 document.getElementById("valCabinet1").addEventListener('change',function(){
	      objCabinet1.value = document.getElementById("valCabinet1").value;
		  document.getElementById("val_Cabinet1").value=document.getElementById("valCabinet1").value;
		  console.log("success");
 })





