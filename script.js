document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('myImage');
    image.src = "image_proxy.jpg";
    
    var clockElement = document.getElementById('clock');
    
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var day = now.getDate();
        var month = now.getMonth() + 1;
    
        var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
        var dateString = day + '/' + month;
        clockElement.textContent = timeString + ' | ' + dateString;
    }

    setInterval(updateClock, 50); 
});
