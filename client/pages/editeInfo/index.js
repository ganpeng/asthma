const app = getApp();

Page({
    data: {
        value: '',
        label: '',
        key: ''
    },
    onLoad(option) {
        const {
            label,
            value,
            key
        } = option;
        wx.setNavigationBarTitle({
            title: label
        });

        this.setData({value, label, key});
    },
    inputHandle(e) {
        const that = this;
        that.setData({
            value: e.detail.value
        });
    },
    backInfoPage() {
        wx.navigateBack();
    },
    saveInfoHandle() {
        const that = this;
        const { key, value } = that.data;
        wx.pro.getStorage('user')
            .then((user) => {
                const newUser = Object.assign({}, user, { [key]: value });
                return wx.pro.setStorage('user', newUser);
            })
            .then((otherUser) => {
                wx.reLaunch({
                    url: 'pages/myinfo/index'
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
})
