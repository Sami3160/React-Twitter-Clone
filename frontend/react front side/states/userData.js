import {atom, selector} from 'recoil';
const userData = selector({
    key: 'userData',
    get: async({get})=>{
        const result=await fetch('http://localhost:5000/userData');
        return result.json();
    }
});

const posts=selector({
    key:'posts',
    get: async({get})=>{
        const result=await fetch('http://localhost:5000/posts');
        return result.json();
    }
})

export default userData;