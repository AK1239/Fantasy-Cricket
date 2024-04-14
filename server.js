const NodeMediaServer = require('node-media-server');
const express = require('express');
const path = require('path');

// Set up NodeMediaServer for RTMP and HTTP-FLV streaming
const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        mediaroot: './media',
        allow_origin: '*',
        webroot: './public',
        mediaroot: './media',
        allow_origin: '*'
    }
};

const nms = new NodeMediaServer(config);
nms.run();

// Set up Express.js server to serve static files
const app = express();
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
