const app = getApp();
const {apiRoot, banner, qulityVideo, recommendedCourse} = require('../../utils/api');

Page({
    data: {
        apiRoot,
        indicatorDots: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        circular: true,
        banners: [],
        qulityVideos: [],
        recommendedCourses: []
    },
    onLoad() {
        var that = this
        wx.pro.request({
            url: banner,
            method: "GET",
            header: {
                'content-type': 'application/json'
            }
        }).then((data) => {
            that.setData({banners: data.banners});
        }).catch((err) => {
            console.log(err);
        });
        wx.pro.request({
            url: qulityVideo,
            method: "GET",
            header: {
                'content-type': 'application/json'
            }
        }).then((data) => {
            that.setData({qulityVideos: data.videos});
        }).catch((err) => {
            console.log(err);
        });
        wx.pro.request({
            url: recommendedCourse,
            method: "GET",
            header: {
                'content-type': 'application/json'
            }
        }).then((data) => {
            that.setData({recommendedCourses: data.recommendedCourses});
        }).catch((err) => {
            console.log(err);
        });

    },
    gotoCollege() {
        wx.switchTab({url: "../college/college"})
    }
})
