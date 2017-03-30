const url = '../logs/logs';
var app = getApp()
Page({
  data: {
    userInfo: {},
    focus: true
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
