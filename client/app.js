//app.js
require('./utils/service');

App({
    onLaunch() {
        wx.pro.login().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    },
    globalData: {
        userInfo: null
    }
})
