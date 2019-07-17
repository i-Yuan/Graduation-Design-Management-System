// pages/detail/detail.js
Page({
  data: {
    index: 0,
    finaltime: '08:00'
  },
  bindStartTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      finaltime: e.detail.value
    })
  }
});
