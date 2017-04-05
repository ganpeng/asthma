import co from 'co';

import Course from '../model/course';


export function getSearchData(req, res) {
    co(function*() {
        const { name, specializedObjs } = req.query;
        const specialObjQuery = JSON.parse(specializedObjs).map((item) => { return {specialObj: item}});

        const options = specialObjQuery.length === 0 ? {name} : {name, $or: specialObjQuery}
        const courses = yield Course.find(options).exec();

        res.json(courses);
    }).catch((err) => {
      console.log(err);
    })
}





export default {
  getSearchData
}

