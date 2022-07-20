
import jwtDecode from "jwt-decode";
export const createOrGetUser=async(response,addUser)=>{
    const decoded=jwtDecode(response.credential);

    const {name,sub,picture}=decoded;
    const user={
        id:sub,
        type:'user',
        userName:name,
        image:picture

    }
    addUser(user)
    // await axios.post('http://localhost:3000/api/auth',user)
    
}