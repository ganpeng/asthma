const app = getApp();

Page({
    data: {
        user: {}
    },
    onLoad(option) {
        const that = this;

        wx.pro.getStorage('user')
            .then((user) => {
                that.setData({user});
            }).catch((err) => {
                console.log(err);
            })
    },
    changeinfo(e) {
        const { label, key, value } = e.target.dataset;
        wx.navigateTo({
            url: `../editeInfo/index?key=${key}&value=${value}&label=${label}`
        })
    }
})
