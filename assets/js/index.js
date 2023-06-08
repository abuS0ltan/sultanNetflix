let accordionButton=document.querySelectorAll('.accordion-button');
let icons=document.querySelectorAll('.accordion-button i')
for (let index = 0; index < accordionButton.length; index++) {
    accordionButton[index].addEventListener('click',function(){
        for (let y = 0; y < accordionButton.length; y++) {
            if(y!=index){
                icons[y].classList.replace('fa-xmark','fa-plus');
            }
        }
        let x = accordionButton[index].classList.contains('collapsed');
        if(x)
        {
            icons[index].classList.replace('fa-xmark','fa-plus');
        }
        else{
            icons[index].classList.replace('fa-plus','fa-xmark');
        }
    })
    
}