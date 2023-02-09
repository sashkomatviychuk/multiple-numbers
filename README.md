## Simple application for handling divisible numbers

Simple application built in with pure Node.js http server

---

### API endpoints

`GET /` accept `number` query string parameter and return:

- G if divisible of 3
- N if divisible of 5
- GN if divisible of both 3 and 5
- returns input `number` in another case

_Note_: if `number` is not valid integer number throw's validation error

#### Example

`http://localhost:3000/?number=30`

---

`404 NOT FOUND` else returns 404 error

---

### Setup locally

1. Clone repository
2. `cd multiple-numbers`
3. `npm install`

---

### Run application

`npm start`

### Run unit tests

`npm test`

---

### Config variables

|  Variable  |               Description                |
| :--------: | :--------------------------------------: |
| `APP_PORT` | Port on which the application is running |
