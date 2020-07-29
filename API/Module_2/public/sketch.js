function setup() {

    noCanvas();
    const video = createCapture(VIDEO);
    video.size(320, 240);

    let lan, lng;
    const button = document.getElementById("geolocate");
    button.addEventListener('click', async event => {
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        const data = { lat, lng, image64 };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/API', options);
        const json = await response.json();
        console.log(json);
    });

    if ('geolocation' in navigator) {
        console.log("Geolocation available");
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log(lat, lng);
            document.getElementById('latitud').textContent = lat;
            document.getElementById('longitud').textContent = lng;
        });
    } else {
        console.log('Geolocation not available');
    }
}