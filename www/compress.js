

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
 
(async () => {
    const files = await imagemin(['images/pic11.jpg'], {
        destination: 'images',
        plugins: [
            imageminMozjpeg(
                {quality:20,}
            ),
        ]
    });
 
    console.log(files);

})();