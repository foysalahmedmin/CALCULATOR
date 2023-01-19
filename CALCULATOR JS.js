let ScreenVr = document.getElementById('screen');
let Buttons = document.querySelectorAll('button');
let screenValue = '';


for(item of Buttons) {
    item.addEventListener('click',(e) =>{
        let buttonText = e.target.innerText;
        console.log('this is number ' , buttonText );
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            ScreenVr.value = screenValue;

        }
        else if (buttonText=='C') {
            buttonText = '';
            screenValue = buttonText;
            ScreenVr.value = screenValue;
        }
        else if (buttonText=='=') {
            screenCurrentValueShow = document.getElementById('screen').value;
            ScreenVr.value = eval(screenCurrentValueShow);
        }
        else if (buttonText=='%') {
            buttonText = '%';
            screenValue += buttonText;
            ScreenVr.value = screenValue;
        }
        else {
            screenValue += buttonText;
            ScreenVr.value = screenValue;
        }
    })
}
let screenCurrentValueShow =  document.getElementById('screen').value;