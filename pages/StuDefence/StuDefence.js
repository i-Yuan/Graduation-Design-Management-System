// pages/detail/detail.js
Page({
  data: {
    index: 0,
    time_start: '08:00'
  },
  bindStartTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time_start: e.detail.value
    })
  }
});
