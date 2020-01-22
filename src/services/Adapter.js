const USERSURL = 'http://localhost:3000/users'
const SKILLSURL = 'http://localhost:3000/skills'
const PROJECTSURL = 'http://localhost:3000/projects'
const EDUCATIONURL = 'http://localhost:3000/education'
const EXPERIENCESURL = 'http://localhost:3000/experiences'
const ACCOLADESURL = 'http://localhost:3000/accolades'
//to use this class, import into the page as Adapter.
//have an object assembled with necessary information to pass into the method. some methods will need the ID as well
//call methods as Adapter.fetchUser(obj) this will return a promise that you will do something with
//make sure to assign the promise to a variable so you can do a .then(data=> method(data))

 class Adapter {

//add or find user via POST request
//will return all of the users data for other fields as well 
  static fetchUser(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  //adding field
  static addSkill(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static addProject(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static addEducation(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static addExperience(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static addAccolade(body){
    return fetch(`${USERSURL}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }


  //edits

  static editUser(id, body){
    return fetch(`${USERSURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editSkill(id, body){
    return fetch(`${SKILLSURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editProject(id, body){
    return fetch(`${PROJECTSURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editEducation(id, body){
    return fetch(`${EDUCATIONURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editExperience(id, body){
    return fetch(`${EXPERIENCESURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editAccolade(id, body){
    return fetch(`${ACCOLADESURL}/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  //deletes

  static deleteUser(id){
    return fetch(`${USERSURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }

  static deleteSkill(id){
    return fetch(`${SKILLSURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }
  
  static deleteProject(id){
    return fetch(`${PROJECTSURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }

  static deleteEducation(id){
    return fetch(`${EDUCATIONURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }

  static deleteExperience(id){
    return fetch(`${EXPERIENCESURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }




  static deleteAccolade(id){
    return fetch(`${ACCOLADESURL}/${id}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
            })
            .then(res => res.json())
  }






}
export default Adapter
