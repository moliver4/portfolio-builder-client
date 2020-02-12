const USERSURL = 'https://serene-journey-12782.herokuapp.com/users'
const SKILLSURL = 'https://serene-journey-12782.herokuapp.com/skills'
const PROJECTSURL = 'https://serene-journey-12782.herokuapp.com/projects'
const EDUCATIONSURL = 'https://serene-journey-12782.herokuapp.com/educations'
const EXPERIENCESURL = 'https://serene-journey-12782.herokuapp.com/experiences'
const ACCOLADESURL = 'https://serene-journey-12782.herokuapp.com/accolades'
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

  //fetches user info based on URL ID
  static findUserInfo(id, body){
    return fetch(`${USERSURL}/${id}`)
            .then(res => res.json())
  }

  //adding field
  static addSkill(body){
    return fetch(`${SKILLSURL}`, {
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
    return fetch(`${PROJECTSURL}`, {
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
    return fetch(`${EDUCATIONSURL}`, {
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
    return fetch(`${EXPERIENCESURL}`, {
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
    return fetch(`${ACCOLADESURL}`, {
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

  static editUser(body){
    return fetch(`${USERSURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editSkill(body){
    return fetch(`${SKILLSURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editProject(body){
    return fetch(`${PROJECTSURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editEducation(body){
    return fetch(`${EDUCATIONSURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editExperience(body){
    return fetch(`${EXPERIENCESURL}/${body.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(body)
            })
            .then(res => res.json())
  }

  static editAccolade(body){
    return fetch(`${ACCOLADESURL}/${body.id}`, {
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
    return fetch(`${EDUCATIONSURL}/${id}`, {
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
