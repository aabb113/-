mui.init();
// 接收数据
var btnsofa1 = document.getElementById("btnsofa1");
var btnsofa2 = document.getElementById("btnsofa2");
var sumSofa = document.getElementById("sumSofa")
// 在底部选项卡中添加选定物品
btnsofa1.addEventListener('change', function() {
        document.getElementById("valSofa1").value=obj.value;
		document.getElementById("val_Sofa1").value=obj.value;
	if (btnsofa1.value != 0) {
		 document.getElementById("sofaList1").style.display="block";
		 document.getElementById("sofa_List1").style.display="block";
	}else{
		document.getElementById("sofaList1").style.display="none";
		document.getElementById("sofa_List1").style.display="none";
	}
});
var obj={};
Object.defineProperty(obj,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btnsofa1.value;
	},
	//有人修改时调用
	set(value){
		btnsofa1.value=value;
	}
})
 document.getElementById("valSofa1").addEventListener('change',function(){
	      obj.value = document.getElementById("valSofa1").value;
		  document.getElementById("val_Sofa1").value=document.getElementById("valSofa1").value;
		  console.log("success");
 })

btnsofa2.addEventListener('change', function() {
        document.getElementById("valSofa2").value=objSofa2.value;
		document.getElementById("val_Sofa2").value=objSofa2.value;
	if (btnsofa2.value != 0) {
		 document.getElementById("sofaList2").style.display="block";
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
		return btnsofa2.value;
	},
	//有人修改时调用
	set(value){
		btnsofa2.value=value;
	}
})
 document.getElementById("valSofa2").addEventListener('change',function(){
	      objSofa2.value = document.getElementById("valSofa2").value;
		  document.getElementById("val_Sofa2").value=document.getElementById("valSofa2").value;
		  console.log("success");
 })




