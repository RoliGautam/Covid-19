const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy("/data.json", {
            target: "https://api.covid19india.org",
            secure:false,
            changeOrigin: true
        })
    );
};