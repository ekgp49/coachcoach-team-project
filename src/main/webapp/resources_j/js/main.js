!(function($) {
  "use strict";

	
		//(chk2 : 비번, chk3: 비번확인란, chk4: 이름, chk5: 이메일)
		  let chk2 = false, chk3 = false, chk4 = false;
			  
		  // 아이디 확인
		  // form.id.value.length < 4 || form.id.value.length > 10
		  $("#userid").on('keyup', function() {
		    // 아이디값 공백 확인
		    if($("#userid").val() === ""){
		       $("#userid").css("background-color", "#F8E5E5");
		       $("#userid").css("border-color", "#F98D8D");
		       $("#alertText").html('<b style="font-size:13px; color:#F64141;"> 아이디를 입력해주세요.</b>');
		       
		    } else if ($("#userid").val().length < 4 || $("#userid").val().length > 10) {
		       $("#userid").css("background-color", "#F8E5E5");
		       $("#userid").css("border-color", "#F98D8D");
		       $("#alertText").html('<b style="font-size:13px; color:#F64141;"> 아이디는 4~10자 사이로 입력해주세요.</b>');
		    } else {
		      $("#userid").css("background-color", "#C1F7FB");
		      $("#userid").css("border-color", "#01b1d7");
		      $("#alertText").html('<b style="font-size:13px; color:#01b1d7;"> ID중복체크를 해주세요.</b>');
		    }
		  })

		  // 비밀번호 확인  
		  $("#password").on('keyup', function() {
		      if($("#password").val() === ""){
		          $("#password").css("background-color", "#F8E5E5");
		          $("#password").css("border-color", "#F98D8D");
		          $("#alertPwd").html('<b style="font-size:13px; color:#F64141;"> 비밀번호를 입력해주세요.</b>');
		          
		       } else if ($("#password").val().length < 8 || $("#password").val().length > 12) {
		          $("#password").css("background-color", "#F8E5E5");
		          $("#password").css("border-color", "#F98D8D");
		          $("#alertPwd").html('<b style="font-size:13px; color:#F64141;"> 비밀번호는 8~12자 사이로 입력해주세요.</b>');
		       } else {
		         $("#password").css("background-color", "#C1F7FB");
		         $("#password").css("border-color", "#01b1d7");
		         $("#alertPwd").html('<b style="font-size:13px; color:#01b1d7;"> 비밀번호 확인을 위해 다시 한번 입력해주세요.</b>');
		     }
		  })
		  
		  
		    // 비밀번호 재확인 
		  //form.password2.value == '' || form.password2.value != form.password.value
		  $("#password2").on('keyup', function() {
		      if($("#password2").val() === ""){
		          $("#password2").css("background-color", "#F8E5E5");
		          $("#password2").css("border-color", "#F98D8D");
		          $("#alertPwd").html('<b style="font-size:13px; color:#F64141;"> 비밀번호를 한번 더 입력해주세요.</b>');
		          
		       } else if ($("#password2").val() != $("#password").val()) {
		          $("#password2").css("background-color", "#F8E5E5");
		          $("#password2").css("border-color", "#F98D8D");
		          $("#alertPwd").html('<b style="font-size:13px; color:#F64141;"> 입력한 비밀번호가 일치하지 않습니다.</b>');
		       } else {
		         $("#password2").css("background-color", "#C1F7FB");
		         $("#password2").css("border-color", "#01b1d7");
		         $("#alertPwd").html('<b style="font-size:13px; color:#01b1d7;"> 입력한 비밀번호와 일치합니다.</b>');
		     }
		  })
		  
		  // 생년월일 확인
		  $("#birth").on('keyup', function() {
		    if($("#birth").val() === ""){
		          $("#birth").css("background-color", "#F8E5E5");
		          $("#birth").css("border-color", "#F98D8D");
		          $("#alertBirth").html('<b style="font-size:13px; color:#F64141;"> 생년월일을 올바르게 입력해주세요. 예)19990102</b>');
		    }
		  })
		  
		  
		  
		  $("#userName").on('keyup', function(){
		    // 이름값 공백 확인
		    if($("#userName").val() === ""){
		       $("#userName").css("background-color", "#F8E5E5");
		       $("#userName").css("border-color", "#F98D8D");
		    }
		  })

		  $('#idck').on('click',function() {
		       $.ajax({
		         type: 'POST',
		         datatype: "json",
		         data: {userid : $("#userid").val()},
		         url: "idcheck",
		         success : function(result){
		        	 
		        	 if(!$("#userid").val()){
		        		 Swal.fire({
			                 icon: 'warning',
			                 title: '실패!',
			                 text: '아이디를 입력해주세요!',
			               })
		        		 $("#userid").css("background-color", "#F8E5E5");
		                 $("#userid").css("border-color", "#F98D8D");
		                 $("#alertText").html('<b style="font-size:13px; color:#F64141;"> 아이디를 입력해주세요.</b>'); 
		                 return;
		        	 }
		        	 
		             if (result == 0){
		               Swal.fire({
		                 icon: 'success',
		                 title: '성공!',
		                 text: '사용가능한 아이디입니다.',
		               })
		                 console.log("넘어온 값 : " + result);
		                 $("#userid").css("background-color", "#C1F7FB");
		                 $("#userid").css("border-color", "#01b1d7");
		                 $("#alertText").html('<b style="font-size:13px; color:#01b1d7;"> 사용가능한 아이디입니다.</b>');
		             } else {
		               idck = 1;
		               console.log("넘어온 값 : " + result);
		                 alert('아이디가 존재합니다. 다른 아이디를 입력해주세요.');
		                 $("#userid").css("background-color", "#F8E5E5");
		                 $("#userid").css("border-color", "#F98D8D");
		                 $("#alertText").html('<b style="font-size:13px; color:#F64141;"> 아이디가 존재합니다. 다른 아이디를 입력해주세요.</b>');
		             }
		         }
		         });
		       });
		       
})(jQuery);

document.querySelector("#btn").onclick = () => {
	var form = document.form
	
	if(form.id.value == ""){
		alert("아이디를 입력해야합니다.");
		obj.id.focus();
		return;
	}
	
	if(form.id.value.length < 4 || form.id.value.length > 10){
		alert('아이디는 4~10자 사이로 입력하세요');
		form.id.value = "";
		form.id.focus();
		return;
	}
	
	
	var password1RegExp = /^[a-zA-z0-9]{8,12}$/; //비밀번호 유효성 검사 (정규식표현법)
	if(!password1RegExp.test(form.password.value)){
		alert("비밀번호는 영문 대소문자와 숫자 8~12자리로 입력해야합니다!");
		form.password.value = "";
		form.password.focus();
		return;
	}
	
	
	if(form.password.value == "" || form.password2.value != form.password.value){
		alert("비밀번호를 정확히 입력해주세요");
		form.password2.value = "";
		form.password2.focus();
		return;
	}
	
	if(form.name.value == ''){
		alert("이름을 입력해주세요");
		form.name.focus();
		return;
	}
	
	if(form.gender.value == ''){
		alert("성별을 선택해주세요")
		form.gender.focus();
		return;
	}
	
	var birthRegExp = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
	if(form.birth.value == '' || !birthRegExp.test(form.birth.value)){
		alert("생년월일을 입력해주세요");
		form.birth.focus();
		return;
	}
	
	if(form.tel1.value == '' || form.tel2.value == '' || form.tel3.value == '' ){
		alert("연락처를 입력해주세요");
		form.alert.focus();
		return;
	}
	
	if(form.email.value == ''){
		alert("이메일을 입력해주세요");
		form.alert.focus();
		return;
	}
	
	document.form.submit();
}