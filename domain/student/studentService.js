import { Service } from '../core/service'
// import repository

class StudentService extends Service {

  constructor() {
    super();
  }

  async createStudent({ params }) {

  }

  async getStudentByEmail( params ) {

  }


}

export const studentService = new StudentService();