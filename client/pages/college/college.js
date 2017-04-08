var app = getApp()
const {
    getAllSpecializedObj,
    searchCourse,
    recommendedCourse
} = require('../../utils/api');

Page({
    data: {
        focus: true,
        showMoreCollegeGroup: false,
        winWidth: 0,
        winHeight: 0,
        specializedObjs: [],
        searchInputValue: '',
        searchList: []
    },
    onLoad: function() {
        var that = this
        wx.pro.request({
            url: getAllSpecializedObj
        }).then((data) => {
            const specializedObjs = data.specializedObjs.map((item) => {
                return {
                    name: item.name,
                    active: false
                };
            });

            that.setData({
                specializedObjs
            });

        }).catch((err) => {
            console.log(err);
        });
        wx.pro.request({
            url: recommendedCourse
        }).then((data) => {
            console.log(data);
            that.setData({
                searchList: data.recommendedCourses
            })
        }).catch((err) => {
            console.log(err);
        });
        wx.pro.getSystemInfo()
            .then((res) => {
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }).catch((err) => {
                console.log(err);
            })
    },
    toggleActive(e) {
        const that = this;
        const index = e.target.dataset.index;
        const specializedObjs = that.data.specializedObjs.map((item, i) => {
            if (i === index) {
                return {
                    name: item.name,
                    active: !item.active
                };
            } else {
                return item;
            }
        })
        that.setData({
            specializedObjs
        });
    },

    bindKeyInput(e) {
        const that = this;
        that.setData({
            searchInputValue: e.detail.value
        });
    },

    submitSearch() {
        const that = this;
        const name = that.data.searchInputValue;
        const specializedObjs = that.data.specializedObjs.filter((specializedObj) => specializedObj.active).map((item) => item.name);

        if (!name) {
            return false;
        }
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
        })
    },

    toggleShowMore() {
        const that = this;
        that.setData({
            showMoreCollegeGroup: !that.data.showMoreCollegeGroup
        })
    }
})
