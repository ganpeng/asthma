const app = getApp();

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        src: ''
    },
    onLoad: function(options) {

		const { videoUrl } = options;
		this.setData({src: videoUrl});
        console.log(videoUrl);

        wx.pro.getSystemInfo().then((res) => {
            this.setData({winWidth: res.windowWidth, winHeight: res.windowHeight});
        }).catch((err) => {
            console.log(err);
        })

    }
})
