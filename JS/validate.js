// form 객체 
// 1] name속성 없을때 : documents.forms[index]
// 2] name속성 있을때 : name값
// 3] id속성 있을 때 : document.getElementById(id값)
// 4] 하위객체.form
//      ex) <input type='submit' onsubmit="this.form"/>
// form하위 객체 = form객체.하위name값
// * js code에서 submit 시 submit 이벤트는 발생하지 않음 form.submit()
function isValidate(obj) {
if(obj == undefined) { //a태그나 img태그는 form의 하위태그가 아니므로, 넘어오는 obj가 undefined이다.
    obj = frmObj;
}
if(obj.id.value == ''){
    //alert('아이디를 입력하세요');
    document.getElementById('idError').innerHTML = '아이디를 입력하세요.';
    obj.id.focus();
    return false; 
}

if(obj.pwd.value==''){
    alert('비밀번호를 입력하세요'); obj.pwd.focus(); return false; 
}
if(frmObj.pwd2.value=='') {
    alert('비밀번호 확인을 입력하세요'); obj.pwd2.focus(); return false; 
}
else {
    if(frmObj.pwd2.value != frmObj.pwd.value) {
        alert('일치하지 않습니다.'); obj.pwd2.focus(); return false;
    }
}
//라디오버튼 선택여부 판단하기
var isGender = false;
/*for(var i=0; i<obj.gender.length; i++) {
    if(obj.gender[i].checked) {
        isGender = true;
        break;
    }
}*/
obj.gender.forEach(function(radio){
    if(radio.checked) {
        isGender = true;
    }
})
if(!isGender) {
    alert('성별을 선택해주세요.'); 
    obj.gender[0].focus();
    return false;
}
//체크박스 3개이상 선택 여부
var count=0;
var notChecked = [];
obj.inter.forEach(function(ch) {
    if(ch.checked){
        count++;
    }
    else {
        //notChecked.push(i);
    }
})
if(count < 3) {
    alert('체크박스를 3개이상 선택해주세요.');
    //obj.inter[notChecked[0]].focus();
    count = 0;
    return false;
}
// select
if(obj.grade.selectedIndex == 0) {
    alert('학력을 선택해주세요.'); 
    obj.grade[0].focus();
    return false;
}
//file
if(obj.file.value == '') {
    alert('파일을 선택해주세요.'); 
    obj.file.focus();
    return false;
}
//textarea
if(obj.self.value == ''){
    alert('자기소개를 선택해주세요.'); 
    obj.self.focus();
    return false;
}
return true;
}   
function fnNoSubmitButton(obj) {
if(isValidate(obj)) obj.submit();
}
function fnKeyup(obj){
document.getElementById('idError').innerHTML = '';
}