## THE TASK

Using Koa as an api framework, we'd like to get a view of how you would design and build a small local api,
to create courses and manage students. 

Here we are leaving the repository for you to branch it, please follows the convention we are after.

The challenge requires you to create a small API which has 3 o 4 main functions, create a new course, create a new course intake, create a new student, and enrol a student into a course. For the purpose of this exercise, storing the created documents 
in a database is not required, however experience dealing with noSQL is required for this role, 
so you may want to consider implementing a small noSQL database for this challenge.

Beside the repository conventions feel free to add functionality or relationships as you see fit.

The requirements of the spec are as follows:
Ability to create a new course (courses should be run within a specified time frame e.g. jan 4th - jan 11th)
Ability to create a new student
Ability to enrol the student into a course (students should be able to enrol in multiple courses provided there are no clashing times) 

No testign is required.

If there are ways in which you think the system could be improved/enhanced, 
please note it down and explain the enhancement (no need to implement it). 

Please reach out if there are any questions


# Technical challenge 

KoaJS web APIs focused on separation of concerns and scalability.

## Quick start

1. Run docker-compose up, to spin up mngo container and a workspace for development
2. Access `http://localhost:3000/` and you're ready to go!

## Endpoints POST
 
http://localhost:3000/enroll/add
```json
 {
    "student_id": "xxxx",
    "intake_course": "xxxx",
    "course": "xxxx"
}
```

http://localhost:3000/course/add
```json
{
  "name": "UX Design",
  "description": "User Experience (UX) and User Interface (UI) Design are interrelated disciplines that cover different aspects of creating amazing digital experiences"
}
```

http://localhost:3000/courseintake/add
```json
{
  "name": "User Experience ux-01",
  "description": "Course Intake",
  "start_date": "2020-10-22",
  "finish_date": "2021-03-29"
}
```

http://localhost:3000/student/add

```json
{
  "email": "Joseph.Galler@gmail.com",
  "name": "Joseph",
  "last_name": "Galler"
}
```

## Tech

- [Node v11.8.0+](http://nodejs.org/)
- [KoaJS](https://npmjs.com/package/koa)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bristol](https://www.npmjs.com/package/bristol)
- [Nodemon](https://www.npmjs.com/package/nodemon)
