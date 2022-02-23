const redis = require('redis');
const companyClient = redis.createClient({
        port: 6378,
        host: '127.0.0.1'
});
companyClient.on('connect', function () {
    console.log('Company Client Connected!');
});

module.exports=companyClient;