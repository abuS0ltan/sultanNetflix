
//--------------------------(make the lable change posthion)--------------------
let form_control =document.querySelectorAll('.form-control');
let form_label =document.querySelectorAll('.form-label');
for (let index = 0; index < form_control.length; index++) {
    form_control[index].addEventListener('focus',function(){
        form_label[index].style.top='-10%';
        form_label[index].style.fontSize='.7rem';
        form_label[index].style.transform='translateY(50%)';

    });
    form_control[index].addEventListener('focusout',function(){
        if(form_control[index].value==''){
            form_label[index].style.top='50%';
            form_label[index].style.fontSize='1rem';
            form_label[index].style.transform='translateY(-50%)';
        }
        
    });
}