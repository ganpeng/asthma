import co from 'co';

import Course from '../model/course';


/**
 *  获取推荐课程
 * */
export function getRecommendedCourse(req, res) {
    co(function *() {
        const recommendedCourses = yield Course.find({recommend: {$ne: null}}).sort({recommend: -1}).exec();
        res.json({recommendedCourses });
    }).catch((err) => {
      console.log(err);
    })
}


export function getCourse(req, res) {
    co(function*() {
        const { id } = req.params;
        const course = yield Course.findOne({_id : id}).populate('courseware').exec();
        res.json({course});
    }).catch((err) => {
      console.log(err);
    })
}


export default {
  getRecommendedCourse,
  getCourse
}

