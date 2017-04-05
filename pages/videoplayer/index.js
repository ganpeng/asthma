const app = getApp();

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
	src: 'http://www.w3school.com.cn/i/movie.ogg'
  },
  onLoad: function () {
      wx.pro.getSystemInfo()
        .then((res) => {
            this.setData( {
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
        })
        .catch((err) => {
            console.log(err);
        })

  }
})
