import React, { Component } from 'react'
import EditAccoladeForm from '../components/EditAccoladeForm.js'
import EditAccoladeCard from '../components/EditAccoladeCard.js'


export default class EditAccoladesContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                editing: false,
                id: 0,
                name: "",
                summary: "",
                link: "",
                order: 0
        }

    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        if(this.state.id === ""){
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    name: this.state.name,
                    summary: this.state.summary,
                    link: this.state.link,
                    order: this.state.order
            }
            delete objToSend['id']
 
                this.props.addObj('accolade', objToSend )
            })
        } else {
            this.setState({editing: false}, () => {
                let objToSend = {
                    user_id: this.props.userInfo.id,
                    id: this.state.id,
                    name: this.state.name,
                    summary: this.state.summary,
                    link: this.state.link,
                    order: this.state.order
            }

                this.props.editObj('accolade', objToSend )
            })
        }
    }

    checkDisplayForm(){
        if(this.state.editing === true){
            return <EditAccoladeForm cancelForm={this.cancelForm} handleFormSubmit={this.handleSubmit} handleFormChange={this.handleFormChange} cardDetails={this.state}></EditAccoladeForm>
        } else {
            return ""
        }
    }

    renderCards(){
        let accolades = this.props.accolades
        return accolades.map((item,index) => {
            return <EditAccoladeCard deleteObj={this.props.deleteObj} changeEditing={this.changeEditing} key={index} cardDetails={item}> </EditAccoladeCard>
        })
    }

    handleFormChange = (e) => {

       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeEditing = (e, cardDetails) => {
        this.setState({
            editing: true,
            id: cardDetails.id,
            name: cardDetails.name,
            summary: cardDetails.summary,
            link: cardDetails.link,
            order: cardDetails.order
    })
    }

    newForm(e){
        e.preventDefault()
        this.setState({
            editing: true,
            id: "",
            name: "",
            summary: "",
            link: "",
            order: 0
    })
    }

    cancelForm = (e) => {
        e.preventDefault()
        this.setState({editing: false})
    }


    render() {
        return (
            <div className="card border-light" style={styles.card}>
                <div className="card-header text-center" style={styles.about}>Accolades</div>
                <div className="card-body" style={styles.body}>
                    <button className="btn btn-sm" style={styles.addButton} onClick={e => this.newForm(e)}>Add New Accolade</button>
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