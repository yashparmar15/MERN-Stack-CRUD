export default {
    getUsers : ()=>{
        return fetch('/user')
            .then(res => res.json()).then(data => data);
    },
    deleteUsers : (_id)=>{
        return fetch(`/user/${_id}`,
        {method : 'delete'})
        .then(res => res.json())
        .then(data => data);
    },
    updateUsers : (user)=>{
        return fetch(`/user/${user._id},`,
            {method : "put",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    },
    createUser : (user)=>{
        return fetch(`/user,`,
            {method : "post",
            body : JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => data);
    }
}