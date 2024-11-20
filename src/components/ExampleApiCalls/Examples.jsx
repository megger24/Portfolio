import { useEffect } from 'react';
import axios from 'axios';

// http://localhost:3030/posts
// http://localhost:3030/users

// run command for json server:
// json-server --watch db.json --port 3030
const Examples = () => {
    console.log('CRUD', 'Create', 'Read', 'Update', 'Delete');
    //        Post     Get     put        delete
    useEffect(() => {
        axios
            .get('http://localhost:3030/posts')
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
        axios
            .get('http://localhost:3030/users')
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    const addUser = () => {
        axios
            .post('http://localhost:3030/users', {
                id: 2,
                username: 'mary',
                password: 'test',
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };
    // addUser()

    const updateUser = () => {
        axios
        .put('http://localhost:3030/users/2', {
            username: 'mary jane',
            password: 'password',
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    // updateUser()

    const deleteUser = () => {
        axios
            .delete('http://localhost:3030/users/2')
            .then(({ data }) => console.log(data))
            .catch((err) => console.log(err));
    }
    // deleteUser()
};

export default Examples;
