//app.js
require('./utils/service');

const user = {
    username: 'louisGan',
    name: '小甘',
    sex: '男',
    email: '464860687@qq.com',
    phone: '15210069510',
    address: '朝阳门'
};



App({
    onLaunch() {
        wx.pro.login().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
        wx.pro.getUserInfo()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        wx.pro.setStorage('user', user)
            .then((user) => {
                console.log('success:');
                console.log(user);
            }).catch((err) => {
                console.log(err);
            })
    },
    globalData: {
        userInfo: null,
    }
})
