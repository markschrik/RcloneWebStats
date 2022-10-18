import {getAllProviders} from "rclone-api";

getAllProviders().then(res => {
    console.log(res);
}).catch( error => {
    console.log(error);
});
