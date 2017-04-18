const app = getApp();

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        src: '',
        content: '',
        unit: '',
        teacher: '',
        currentTab: 0
    },
    onLoad: function(options) {

        const {
            videoUrl,
            content,
            unit,
            teacher,
            name
        } = options;
        wx.setNavigationBarTitle({
            title:name
        });
        this.setData({
            src: videoUrl,
            content,
            unit,
            teacher
        });

        wx.pro.getSystemInfo().then((res) => {
            this.setData({
                winWidth: res.windowWidth,
                winHeight: res.windowHeight
            });
        }).catch((err) => {
            console.log(err);
        })

    },
    bindChange(e) {
        const that = this;
        that.setData({
            currentTab: e.detail.current
        });
    },
    switchNav(e) {
        const that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    }
})
