export default {
    getUsers : ()=>{
        return fetch('http://localhost:5000/user')
            .then(res => res.json()).then(data => data);
    },
    deleteUser : (_id)=>{
        return fetch(`http://localhost:5000/user/${_id}`,
        {method : 'delete'})
        .then(res => res.json())
        .then(data => data);
    },
    updateUser : (user)=>{
        return fetch(`http://localhost:5000/user/${user._id}`,
            {method : "put",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    },
    createUser : (user)=>{
        return fetch('http://localhost:5000/user',
            {method : "post",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json",
                'Accept': 'application/json'
            }}).then(res => res.json())
                .then(data => data);
    }
}