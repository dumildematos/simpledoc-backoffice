import { Request , ExternalRequest } from '../utils/requests';


/** user login POST /api/login/account */
export function userLogin(body: any) {

  const options = {
    url: '/api/login/springboot',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  }
  // const data = Request({...options })
  // console.log(data)
  console.log(options)

  return fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));
}
