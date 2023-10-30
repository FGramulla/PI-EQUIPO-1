
//Cambiar por el back
export const getAllUsers = async ()=>{
  const data = localStorage.getItem("users");
  const users = data ? JSON.parse(data) : null;
  return users;
};

export const getUserById = async (id) =>{
  const users = await getAllUsers();
  return users.find(user => user.id === parseInt(id));
}

export const getUserByName = async (name) =>{
  const users = await getAllUsers();
  return users.find(user => user.data.name === name);
}

export const getUserByEmail = async (email) =>{
  const users = await getAllUsers();
  return users.find(user => user.data.email === email);
}

export const loginUser = async (email, pass )=>{
  let logged = false;
  const users = await getAllUsers()
    .then((result) =>{
      const existEmail = result.find(user => user.data.email === email);

      if( existEmail ){
        if(existEmail.data.password === pass){
          logged = true;
        }else{
          logged = false;
        }
      }else{
        logged = false;
      }

    })
  
    return logged;
  
}