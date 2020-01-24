import React, { Component } from 'react'
import EditSkillForm from '../components/EditSkillForm.js'
import EditSkillCard from '../components/EditSkillCard.js'

export default class EditSkillsContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                editing: false,
                id: 0,
                category: "",
                name: "",
                proficiency: "",
                link_url: "",
                order: 0
        }
        // console.log(this.props.skills)
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        if(this.state.id === ""){
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    name: this.state.name,
                    category: this.state.category,
                    link_url: this.state.link_url,
                    proficiency: this.state.proficiency,
                    order: this.state.order
            }
            delete objToSend['id']
            console.log('%c This is the object being sent to add', 'color: #deff8b;', objToSend)
                this.props.addObj('skill', objToSend )
            })
        } else {
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    name: this.state.name,
                    category: this.state.category,
                    link_url: this.state.link_url,
                    proficiency: this.state.proficiency,
                    order: this.state.order
            }
            console.log('%c This is the object being sent to edit', 'color: #deff8b;', objToSend)
                this.props.editObj('skill', objToSend )
            })
        }
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditSkillForm cancelForm={this.cancelForm}handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state}></EditSkillForm>
        } else {
            return ""
        }
    }

    renderCards(){
        let skills = this.props.skills
        return skills.map((item,index) => {
            return <EditSkillCard deleteObj={this.props.deleteObj} changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditSkillCard>
        })
    }

    handleFormChange = (e) => {
        console.log(e.target.name)
       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    changeEditing = (e, cardDetails) => {
        this.setState({
            editing: true,
            id: cardDetails.id,
            category: cardDetails.category,
            name: cardDetails.name,
            proficiency: cardDetails.proficiency,
            link_url: cardDetails.link_url,
            order: cardDetails.order
        })
    }

    newForm(e){
        e.preventDefault()
        this.setState({
            editing: true,
            id: "",
            category: "",
            name: "",
            proficiency: "",
            link_url: "",
            order: 0
    })
    }

    cancelForm = () => {
        this.setState({editing: false})
    }


    render() {
        return (
            <div className="card border-light" style={styles.card}>
                    <div className="card-header text-center" style={styles.about}>Skills</div>
                    <div className="card-body" style={styles.body}>
                        <button className="btn btn-sm"  style={styles.addButton} onClick={e => this.newForm(e)}>Add New Skill</button>
                        {this.checkDisplayForm()}
                        {this.renderCards()}
                    </div>
                </div>
        )
    }
}


const styles = {
    addButton: {
        color: '#ffffff',
        backgroundColor: '#12cad6',
        marginBottom: 20,
        marginLeft: '30%',
        marginRight: '30%'
    },
    card: {
        marginTop: 20,
        marginBottom: 20
    },
    body: {
        display: 'flex',
        flexDirection: 'column'
    },
    about: {
        color: '#0fabbc',
        backgroundColor: '#e4f9ff'
    }
}