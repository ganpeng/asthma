const app = getApp();

Page({
    data: {
        user: {},
        genderDialogStatus: false,
        genders: [
          {name: '男', value: '男', checked: false},
          {name: '女', value: '女', checked: false}
        ]
    },
    onLoad(option) {
        const that = this;

        wx.pro.getStorage('user').then((user) => {
            that.setData({user});
            const gender = user.sex;
            that.changeGenders(gender);
        }).catch((err) => {
            console.log(err);
        })
    },
    changeGenders(gender) {
        const that = this;
        const genders = that.data.genders.map((item) => {
            if (item.value === gender) {
                return {
                    name: item.name,
                    value: item.value,
                    checked: true
                }
            } else {
                return {
                    name: item.name,
                    value: item.value,
                    checked: false
                }
            }
        });
        that.setData({genders});
    },
    radioChange(e) {
        const that = this;
        const sex = e.detail.value;
        const user = Object.assign({}, that.data.user, {sex});
        wx.pro.setStorage('user', user)
            .then((user) => {
                const gender = user.sex;
                that.setData({user, genderDialogStatus: false});
                that.changeGenders(gender);
            }).catch((err) => {
                console.log(err);
            })
    },
    showGenderDialog() {
        const that = this;
        that.setData({genderDialogStatus: true});
    }
})
