
//https://github.com/addyosmani/critical

const critical = require('critical');

critical.generate({
    inline: true,
    base: 'www/',
    src: 'index.html',
    target: {
      html: 'index-critical.html',
      css: 'critical.css'
    },
    width: 1400,
    height: 1200,

    minify: true,
    extract: true,
});