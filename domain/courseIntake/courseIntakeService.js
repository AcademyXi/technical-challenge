import { Service } from '../core/service'
// import repository

class CourseIntakeService extends Service {

  constructor() {
    super();
  }

  async createCourseIntake({ params }) {
    let result = {}
    // TODO validate here

    return result;
  }

}

export const courseService = new CourseIntakeService();