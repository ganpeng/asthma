require('./utils/service');

const Promise = require('./libs/bluebird');
const {apiRoot, appId} = require('./utils/api');

const imageRoot = 'https://deac.medclass.cn';

const user = {
    username: 'louisGan',
    name: '小甘',
    sex: '女',
    email: '464860687@qq.com',
    phone: '15210069510',
    address: '朝阳门'
};

App({
    onLaunch() {
        Promise.all([wx.pro.login(), wx.pro.getUserInfo()]).then((results) => {
            const {code} = results[0];
            const {encryptedData, iv} = results[1];
            return wx.pro.request({url: `${apiRoot}/weixin?code=${code}&encryptedData=${encodeURIComponent(encryptedData)}&iv=${encodeURIComponent(iv)}`})
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
        wx.pro.setStorage('user', user).then((user) => {
            console.log('success:');
        }).catch((err) => {
            console.log(err);
        });
    },
    globalData: {
        userInfo: null,
        imageRoot
    }
})

function getSecretInfo(session_key, encryptedData, iv) {
    const pc = new WXBizDataCrypt(appId, session_key)
    const data = pc.decryptData(encryptedData, iv)
    return data;
}
