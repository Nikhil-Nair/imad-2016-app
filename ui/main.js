console.log('Loaded!');


//Adding code toi change HTML content

var element = document.getElementById('main-text');
element.innerHTML = 'New-Value';


//Moving Madi!!!!

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';    
}
