const   usuarios    =[
        {id:1, nome:'Jean', email: 'jeanfelippe@testes.com', senha: '111', expirado: false},
        {id:2, nome:'Julio', email: 'juliolima@testes.com', senha: '000', expirado: true},
        {id:3, nome:'Camila', email: 'camila@testes.com', senha: '123', expirado: false},
    
];


function realizarLogin(email, senha){
    const user = usuarios.find(u=> u.email == email);

    if(!user){
        return 'usuário não existe';
    }

    if(user.expirado){
        return 'usuario expirado';
    }

    if(user.senha !== senha){
        return 'senha incorreta';
    }

    
        return 'login realizado com sucesso';
    }       



export {realizarLogin};