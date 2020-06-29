const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    const files = await imagemin(['images/*.jpg'], {
        destination: 'images',
        plugins: [
            imageminMozjpeg(
                {quality:30,}
            ),
        ]
    });

    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();