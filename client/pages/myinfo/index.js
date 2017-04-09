const app = getApp();

Page({
    data: {
        user: {}
    },
    onLoad(option) {
        const that = this;

        wx.pro.getStorage('user')
            .then((user) => {
                that.setData({
                    user
                });
            }).catch((err) => {
                console.log(err);
            })
    }
})
