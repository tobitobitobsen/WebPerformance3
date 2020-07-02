//https://github.com/imagemin/imagemin-webp

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
    await imagemin(['images/pic11.webp'], {
		destination: 'images',
		plugins: [
			imageminWebp({quality: 1})
		]
	});

	console.log('Images optimized');
})();