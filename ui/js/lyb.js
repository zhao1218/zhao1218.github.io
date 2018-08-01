  function namekeyup(){
	var tableForm = document.getElementById('form');
	var pattern = /^[a-zA-Z|\d|\u0391-\uFFE5]*$/;
	 if(!pattern.exec(tableForm.name.value)){
		tableForm.name.value="";
	 }
  
  }
   function phonekeyup(){
	var tableForm = document.getElementById('form');
	var pattern = /^[a-zA-Z|\d|\u0391-\uFFE5]*$/;
	 if(!pattern.exec(tableForm.phone.value)){
		tableForm.phone.value="";
	 }
  
  }
   function qqkeyup(){
	var tableForm = document.getElementById('form');
	var pattern = /^[a-zA-Z|\d|\u0391-\uFFE5]*$/;
	 if(!pattern.exec(tableForm.qq.value)){
		tableForm.qq.value="";
	 }
  
  }

  function check(){
	  var tableForm = document.getElementById('form');
	

	  var cour = document.getElementsByName("course");
	  if(tableForm.name.value==""){
		  alert("请输入姓名");
		  return false;
		  }
	  if(!isCardName(tableForm.name.value)){
		  alert("姓名输入错误！");
		  return false;
		  }
	if(tableForm.phone.value==""){
		  alert("请输入电话");
		  return false;
		  }
		  if(!isNumber(tableForm.phone.value)){
		  alert("电话输入错误！");
		  return false;
		  }
	// if(tableForm.qq.value==""){
	//		  alert("请输入QQ");
	//		  return false;
	//		  }
	//		  if(!isNumber(tableForm.qq.value)){
	//		  alert("QQ输入错误！");
	//		  return false;
	//		  }
      alert("请稍候，我们将第一时间与您联系！");
	tableForm.submit();
	
  }
function haha(){
	location.reload(); 
	return true;
}
//检验姓名：姓名是2-15字的汉字
function isCardName(s) 
{
    var patrn = /^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/; 
    if(!patrn.exec(s))
    {
        return false;
    }
    return true;
}
//数字
function isNumber(s) 
{
    var patrn = /^\s*\d+\s*$/;
    //var patrn1=/^\s*\d{16}[\dxX]{2}\s*$/;
    if(!patrn.exec(s))
    {
        return false;
    }
    return true;
}
