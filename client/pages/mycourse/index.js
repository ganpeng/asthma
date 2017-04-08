const app = getApp()

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        mycourseList: []
    },
    onLoad: function(option) {
        const that = this;
        wx.pro.getSystemInfo().then((res) => {
            this.setData({
                winWidth: res.windowWidth,
                winHeight: res.windowHeight
            });
        }).catch((err) => {
            console.log(err);
        });
    }
})
