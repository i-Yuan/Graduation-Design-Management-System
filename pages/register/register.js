// pages/register/register.js
import WxValidate from "../../utils/WxValidate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {//增加form子元素
      sname:'',
      _id:'',
      tel:''
    }
  },

  registSubmit(e){
    
    const params = e.detail.value
    console.log(params)
    //校验表单
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }

    const db = wx.cloud.database()
    const sname=e.detail.value.sname
    const _id=e.detail.value._id
    const tel=e.detail.value.tel
    getApp().globalData.sname = sname
    getApp().globalData._id = _id
    getApp().globalData.tel = tel
    db.collection('stu').add({
      data: {
        sname: sname,
        _id:_id,
        tel:tel
      },
      success: res => {
        wx.switchTab({
          url: '../index/index',
        })
        wx.showToast({
          title: '注册成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate()//验证规则函数


  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },


//报错 
showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  //验证函数
  initValidate() {
    const rules = {
      sname: {
        required: true,
        minlength: 2
      },
      _id: {
        required: true,
        digits: true
      },
      tel: {
        required: true,
        tel: true
      }
      
    }
    const messages = {
      sname: {
        required: '请填写姓名',
        minlength: '请输入正确的名称'
      },
      _id:{
        required:'请填写学号',
        digits:'请输入正确的学号'
      },
      tel: {
        required: '请填写手机号',
        tel: '请填写正确的手机号'
      }
    }
    this.WxValidate = new WxValidate(rules, messages)
  },
})