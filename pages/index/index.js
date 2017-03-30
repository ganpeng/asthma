const apiUrl = 'https://api.douban.com/v2/book/1220562';

const url = '../college/college';

const app = getApp();

Page({
    data: {
        userInfo: {},
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        circular: true,
        searchInputValue: ""
    },
    //事件处理函数
    bindViewTap() {
        wx.navigateTo({url})
    },
    onLoad: function() {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({userInfo: userInfo})
        })

        wx.pro.request({
            url: apiUrl,
            method: "GET",
            header: {
                'content-type': 'application/json'
            }
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
    },

    gotoDetail(e) {
        const that = this;
        wx.navigateTo({
            url: "../coursedetail/index?_id=5"
        });
    },

    bindKeyInput(e) {
        const that = this;
        that.setData({
            searchInputValue: e.detail.value
        });
    },

    submitSearch() {
        console.log(this.data.searchInputValue);
    },

    gotoCollege() {
        wx.switchTab({
            url: "../college/college"
        })
    }
})
