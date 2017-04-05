import co from 'co';

import Banner from '../model/banner';


export function getBanners(req, res) {
    co(function*() {
        const banners = yield Banner.find({status: 1}).limit(3).exec();
        res.json({banners});
    }).catch((err) => {
      console.log(err);
    })
}




export default {
  getBanners
}
