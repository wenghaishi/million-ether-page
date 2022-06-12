function draw () {
    let canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        );
        let data = imageData.data;
        console.log(canvas.width, canvas.height, data.length);

        function writePixelWithEvent(event) {
            let {x, y, color} = event.returnValues;
            writePixels(
                parseInt(x),
                pariseInt(y),
                parseColor(color)
            );
        }

        for (var i = 0; i < data.length; i += 4) {
            data[i + 0] = i % 255; //red
            data[i + 1] = i % 255; //green
            data[i + 2] = i % 255; //blue
            data[i + 3] = i % 255; //alpha
        }
        ctx.putImageData(imageData, 0, 0);
        
    }

}

document.body.onload = function() {
    draw();
}