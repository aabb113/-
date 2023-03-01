mui.init();
// 接收数据
var btnsofa1 = document.getElementById("btnsofa1");
var btnsofa2 = document.getElementById("btnsofa2");
var btnchair1 = document.getElementById("btnchair1");
var btnchair2 = document.getElementById("btnchair2");
var btndesk1 = document.getElementById("btndesk1");
var btndesk2 = document.getElementById("btndesk2");
var btncabinet1 = document.getElementById("btncabinet1");
var btncabinet2 = document.getElementById("btncabinet2");
var btncabinet3 = document.getElementById("btncabinet3");
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

btnchair1.addEventListener('change', function() {
        document.getElementById("valChair1").value=objChair1.value;
		document.getElementById("val_Chair1").value=objChair1.value;
	if (btnchair1.value != 0) {
		 document.getElementById("chairList1").style.display="block";
		 document.getElementById("chair_List1").style.display="block";
	}else{
		document.getElementById("chairList1").style.display="none";
		document.getElementById("chair_List1").style.display="none";
	}
});
var objChair1={};
Object.defineProperty(objChair1,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btnchair1.value;
	},
	//有人修改时调用
	set(value){
		btnchair1.value=value;
	}
})
 document.getElementById("valChair1").addEventListener('change',function(){
	      objChair1.value = document.getElementById("valChair1").value;
		  document.getElementById("val_Chair1").value=document.getElementById("valChair1").value;
		  console.log("success");
 })
 
 btnchair2.addEventListener('change', function() {
         document.getElementById("valChair2").value=objChair2.value;
 		document.getElementById("val_Chair2").value=objChair2.value;
 	if (btnchair2.value != 0) {
 		 document.getElementById("chairList2").style.display="block";
 		 document.getElementById("chair_List2").style.display="block";
 	}else{
 		document.getElementById("chairList2").style.display="none";
 		document.getElementById("chair_List2").style.display="none";
 	}
 });
 var objChair2={};
 Object.defineProperty(objChair2,'value',{
 	// 当有人读取obj.value时调用
 	get(){
 		return btnchair2.value;
 	},
 	//有人修改时调用
 	set(value){
 		btnchair2.value=value;
 	}
 })
  document.getElementById("valChair2").addEventListener('change',function(){
 	      objChair2.value = document.getElementById("valChair2").value;
 		  document.getElementById("val_Chair2").value=document.getElementById("valChair2").value;
 		  console.log("success");
  })

btndesk1.addEventListener('change', function() {
        document.getElementById("valDesk1").value=objDesk1.value;
		document.getElementById("val_Desk1").value=objDesk1.value;
	if (btndesk1.value != 0) {
		 document.getElementById("deskList1").style.display="block";
		 document.getElementById("desk_List1").style.display="block";
	}else{
		document.getElementById("deskList1").style.display="none";
		document.getElementById("desk_List1").style.display="none";
	}
});
var objDesk1={};
Object.defineProperty(objDesk1,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btndesk1.value;
	},
	//有人修改时调用
	set(value){
		btndesk1.value=value;
	}
})
 document.getElementById("valDesk1").addEventListener('change',function(){
	      objDesk1.value = document.getElementById("valDesk1").value;
		  document.getElementById("val_Desk1").value=document.getElementById("valDesk1").value;
		  console.log("success");
 })

btndesk2.addEventListener('change', function() {
        document.getElementById("valDesk2").value=objDesk2.value;
		document.getElementById("val_Desk2").value=objDesk2.value;
	if (btndesk2.value != 0) {
		 document.getElementById("deskList2").style.display="block";
		 document.getElementById("desk_List2").style.display="block";
	}else{
		document.getElementById("deskList2").style.display="none";
		document.getElementById("desk_List2").style.display="none";
	}
});
var objDesk2={};
Object.defineProperty(objDesk2,'value',{
	// 当有人读取obj.value时调用
	get(){
		return btndesk2.value;
	},
	//有人修改时调用
	set(value){
		btndesk2.value=value;
	}
})
 document.getElementById("valDesk2").addEventListener('change',function(){
	      objDesk2.value = document.getElementById("valDesk2").value;
		  document.getElementById("val_Desk2").value=document.getElementById("valDesk2").value;
		  console.log("success");
 })
 
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
 
 btncabinet2.addEventListener('change', function() {
         document.getElementById("valCabinet2").value=objCabinet2.value;
 		document.getElementById("val_Cabinet2").value=objCabinet2.value;
 	if (btncabinet2.value != 0) {
 		 document.getElementById("cabinetList2").style.display="block";
 		 document.getElementById("cabinet_List2").style.display="block";
 	}else{
 		document.getElementById("cabinetList2").style.display="none";
 		document.getElementById("cabinet_List2").style.display="none";
 	}
 });
 var objCabinet2={};
 Object.defineProperty(objCabinet2,'value',{
 	// 当有人读取obj.value时调用
 	get(){
 		return btncabinet2.value;
 	},
 	//有人修改时调用
 	set(value){
 		btncabinet2.value=value;
 	}
 })
  document.getElementById("valCabinet2").addEventListener('change',function(){
 	      objCabinet2.value = document.getElementById("valCabinet2").value;
 		  document.getElementById("val_Cabinet2").value=document.getElementById("valCabinet2").value;
 		  console.log("success");
  })
  
  btncabinet3.addEventListener('change', function() {
          document.getElementById("valCabinet3").value=objCabinet3.value;
  		document.getElementById("val_Cabinet3").value=objCabinet3.value;
  	if (btncabinet3.value != 0) {
  		 document.getElementById("cabinetList3").style.display="block";
  		 document.getElementById("cabinet_List3").style.display="block";
  	}else{
  		document.getElementById("cabinetList3").style.display="none";
  		document.getElementById("cabinet_List3").style.display="none";
  	}
  });
  var objCabinet3={};
  Object.defineProperty(objCabinet3,'value',{
  	// 当有人读取obj.value时调用
  	get(){
  		return btncabinet3.value;
  	},
  	//有人修改时调用
  	set(value){
  		btncabinet3.value=value;
  	}
  })
   document.getElementById("valCabinet3").addEventListener('change',function(){
  	      objCabinet3.value = document.getElementById("valCabinet3").value;
  		  document.getElementById("val_Cabinet3").value=document.getElementById("valCabinet3").value;
  		  console.log("success");
   })