const USERSURL = 'http://localhost:3000/users'
// const SKILLSURL = 'http://localhost:3000/skills'
// const PROJECTSURL = 'http://localhost:3000/projects'
// const EDUCATIONURL = 'http://localhost:3000/education'
// const EXPERIENCESURL = 'http://localhost:3000/experiences'
// const ACCOLADESURL = 'http://localhost:3000/accolades'

 class Adapter {

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


}
export default Adapter
