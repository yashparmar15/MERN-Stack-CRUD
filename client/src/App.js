import React from 'react';

import UserTable from './components/UserTable';
import Form from './components/Form';
import Message from './components/Message';
import UserAPI from './UserAPI';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users : [],
            isEditform : false,
            user : {
                firstName : "",
                lastName : "",
                phone : "",
                college : ""
            },
            message : ""
        }

        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
        this.updateHandler = this.updateHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.s = this.s.bind(this);
    }

    componentDidMount(){
        UserAPI.getUsers().then(data => {
            this.setState(
                {users : data}
            )
            
        }).catch(err => console.log(err));
    }

    resetForm (){
        this.setState({ 
            user : {
                firstName : "",
                lastName : "",
                phone : "",
                college : ""
            }
        })
    }

    handleChange(e){
        this.setState({
            user : {
                ...this.state.user,
                [e.target.name] : e.target.value
            }
        });
    }

    s(user){
        console.log(user);
        this.setState({
            isEditform : true, user : user
        });
    }

    async deleteHandler(id){
        const deleteData = await UserAPI.deleteUser(id);
        const message = deleteData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await UserAPI.getUsers();
            this.setState({message,users : data})
        }
        
    }

    async updateHandler(e){
        e.preventDefault();
        const updateData = await UserAPI.updateUser(this.state.user);
        const message = updateData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await UserAPI.getUsers();
            this.setState({message,users : data})
        }
        this.setState({isEditform : false});
        this.resetForm();
    }

    async addHandler(e){
        e.preventDefault();
        const postData = await UserAPI.createUser(this.state.user);
        const message = postData.message;
        if(message.msgError){
            this.setState({message});
        }
        else{
            const data = await UserAPI.getUsers();
            this.setState({message,users : data})
        }
        this.resetForm();
    }

    renderUserTable(){

            return (
                <UserTable users = {this.state.users}
                           deleteHandler = {this.deleteHandler}
                           s = {this.s}/>
            )
    }

    renderForm(){
        return(
            <Form isEditform = {this.state.isEditform}
                  user = {this.state.user}
                  handleChange = {this.handleChange}
                  handler = {!this.state.isEditform ? this.addHandler : this.updateHandler}/>
        );
    }

    renderMessage(){
        if(this.state.message === "")
            return null;
        return(
            <Message message = {this.state.message}/>
        )
    }


    render(){
        return(
            <div className = "row">
                <div className = "col">

                </div>
                <div className = "col-10">
                    {this.renderUserTable()}
                    {this.renderForm()}
                    {this.renderMessage()}
                </div>
                <div className = "col">
                    
                </div>
            </div>
        )
    }
}

export default App;
