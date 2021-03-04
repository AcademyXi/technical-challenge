import { Service } from '../core/service'
// import repository

class EnrollmentService extends Service {

  constructor() {
    super();
  }

  async enrollCourse({  params }) {

  }

}

export const enrollmentService = new EnrollmentService();