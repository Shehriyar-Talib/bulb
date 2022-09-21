var light = document.getElementById('light');
 
light.addEventListener('click', function(light){
    light.target.classList.toggle('bulb-on');
})