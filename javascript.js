function a(){
	confirm("Do you want to Sign Up?");
}
function b(){
	alert("Your Sign up has completed successfully");
	//window.history.back();	
}
function validate(){
	if(f.id.value == ""){
		alert("please Enter your ID");	
		return false;
	}
	if(f.pw.value == ""){
		alert("please Enter your PW");
		return false;
	}
	if(f.email.value == ""){
		alert("please Enter your Email");
		return false;
	}
	if(f.phone.value == ""){
		alert("please Enter your Phone");
		return false;
	}		
}
