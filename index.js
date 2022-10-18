import {getAllProviders} from "rclone-api";

getAllProviders().then(res => {
    console.log(res);
    //... do something with the data
}, error => {
    //... do something with the error
    //eg: alert(error)
    console.log(error);
});
