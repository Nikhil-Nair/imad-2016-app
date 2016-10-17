console.log('Loaded!');


//Adding code toi change HTML content

var element = document.getElementById('main-text');
element.innerHTML = 'New-Value';


//Moving Madi!!!!
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('madi');
img.onclick = function(){
    var interval = setInterval(moveRight,100);
     
};
