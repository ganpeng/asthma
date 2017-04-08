const app = getApp()

const {
    searchCourse,
} = require('../../utils/api');

Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        searchList: []
    },
    onLoad: function(option) {
        const that = this;

        const name = option.name;
        const specializedObjs = JSON.parse(option.specializedObjs);

        wx.pro.request({
            url: searchCourse,
            data: {
                name,
                specializedObjs
            }
        }).then((data) => {
            that.setData({
                searchList: data
            });
        }).catch((err) => {
            console.log(err);
        });
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
