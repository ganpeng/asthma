// const apiRoot = 'http://192.168.0.163:1988';
 const apiRoot = 'http://localhost:1988';
//const apiRoot = 'https://www.stydyweb.com';

function courseDetailApi(id) {
    return `${apiRoot}/course/coursedetail/${id}`;
}

module.exports = {
    apiRoot,
    banner: `${apiRoot}/banner`,
    qulityVideo: `${apiRoot}/video/qulityvideo`,
    recommendedCourse: `${apiRoot}/course/recommendedcourse`,
    courseDetail: courseDetailApi,
    getAllSpecializedObj: `${apiRoot}/specializedObj/all`,
    searchCourse: `${apiRoot}/search/course`
}
