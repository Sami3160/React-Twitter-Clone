import {atom, selector} from 'recoil';
const user=atom({
    key:'user',
    default:{
        email:'',
        username:''
    }
})
export const userInfo = selector({
    key: 'userInfo',
    get: async({get})=>{
        const email=get(email);
        const result=await fetch('http://localhost:5000/userData',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                "Accept":"application/json"
        }
        ,
        body:JSON.stringify({
          email:email
        })
        });
        return result.json();
    }
});

export const posts=selector({
    key:'posts',
    get: async({get})=>{
        const result=await fetch('http://localhost:5000/posts');
        return result.json();
    }
})

export default user;