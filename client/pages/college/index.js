var app = getApp()
const {getAllSpecializedObj, searchCourse, recommendedCourse} = require('../../utils/api');

Page({
    data: {
        focus: true,
        showMoreCollegeGroup: true,
        winWidth: 0,
        winHeight: 0,
        specializedObjs: [],
        searchInputValue: ''
    },
    onLoad: function() {
        var that = this
        wx.pro.request({url: getAllSpecializedObj}).then((data) => {
            const specializedObjs = data.specializedObjs.map((item) => {
                return {id: item._id, name: item.name, active: false};
            });

            that.setData({specializedObjs});

        }).catch((err) => {
            console.log(err);
        });
        wx.pro.getSystemInfo().then((res) => {
            that.setData({winWidth: res.windowWidth, winHeight: res.windowHeight});
        }).catch((err) => {
            console.log(err);
        })
    },
    toggleActive(e) {
        const that = this;
        // const index = e.target.dataset.index;
        const typeid = e.target.dataset.typeid;
        // const specializedObjs = that.data.specializedObjs.map((item) => {
        //     if (item.id === typeid) {
        //         return {
        //             id: item.id,
        //             name: item.name,
        //             active: !item.active
        //         };
        //     } else {
        //         return item;
        //     }
        // })
        // that.setData({specializedObjs});
        wx.navigateTo({
            // url: `../searchlist/index?name=${name}&specializedObjs=${JSON.stringify(specializedObjs)}`
            url: `../searchlist/index?typeid=${typeid}`
        });
    },

    bindKeyInput(e) {
        const that = this;
        that.setData({searchInputValue: e.detail.value});
    },

    searchBySpecializedObj(e) {
        const that = this;
        const specializedObj = e.target.dataset
    },
    submitSearch() {
        const that = this;
        const name = that.data.searchInputValue;
        // const specializedObjs = that.data.specializedObjs.filter((specializedObj) => specializedObj.active).map((item) => item.name);

        if (!name) {
            return false;
        }

        wx.navigateTo({
            // url: `../searchlist/index?name=${name}&specializedObjs=${JSON.stringify(specializedObjs)}`
            url: `../searchlist/index?name=${name}`
        });
    },

    toggleShowMore() {
        const that = this;
        that.setData({
            showMoreCollegeGroup: !that.data.showMoreCollegeGroup
        })
    }
})
