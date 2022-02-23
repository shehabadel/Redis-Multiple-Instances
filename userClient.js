const redis = require('redis');
const userClient = redis.createClient({
        port: 6380,
        host: '127.0.0.1'
});
userClient.on('connect', function () {
    console.log('User Client Connected!');
});

module.exports= userClient;