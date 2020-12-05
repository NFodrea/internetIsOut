import fs from "fs";
import request from "request";
import moment from "moment";

let connectionFile = fs.readFileSync("connectionFail.txt", "utf8")
let requestLoop = setInterval(() => {
    let requestLoop = setInterval(() => {
        request({
            url: "http://www.google.com",
            method: "GET",
            timeout: 10000,
            followRedirect: true,
            maxRedirects: 10
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log('sucess!');
            } else {
                fs.writeFileSync(connectionFile, moment().format('MMMM Do YYYY, h:mm:ss a'));
            }
        });
    }, 30000);

    // If you ever want to stop it...  clearInterval(requestLoop)
