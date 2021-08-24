const RPC = require('discord-rpc');
require('dotenv').config();
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
	console.log('Ready');
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "FIRST ROW",
            state: "SECOND ROW",
            timestamps: {
				// ne piszkáld
                start: Date.now()
            },
            assets: {
                large_image: "A kép neve",
                large_text: "A kép szövege ami ráhúzásnál látszik"
            },
            buttons: [
				// gomb 1
                { label: "Discord", url: "https://skyreflect.hu/dc" },
				// gomb 2
                { label: "Github", url: "https://github.com/Proedge1WasTaken" }
            ]
        }
    });
});

client.login({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret
});