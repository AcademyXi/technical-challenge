import { Service } from '../core/service'
// import repository

class CourseService extends Service {

  constructor() {
    super();
  }

  async createCourse({ params }) {
    let result = {}
    // TODO validate here

    return result;
  }

}

export const courseService = new CourseService();