var app = getApp()
const {getAllSpecializedObj} = require('../../utils/api');

Page({
    data: {
        focus: true,
        specializedObjs: []
    },
    onLoad: function() {
        var that = this
        wx.pro.request({url: getAllSpecializedObj}).then((data) => {
            const specializedObjs = data.specializedObjs.map((item) => {
                return {name: item.name, active: false};
            });

            that.setData({specializedObjs});

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
        that.setData({specializedObjs});
    }
})
