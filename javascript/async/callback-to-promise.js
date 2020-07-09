// callback hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'));
                }
            }, 1000);
    
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user = 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            })
        });
    }
};

 const userStorage = new UserStorage();
 const id = prompt('enter your id');
 const password = prompt('enter your password');
// userStorage.loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
//     .catch(console.log)

async function asyncAwait(){
    const loginuser = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(id);
    return alert(`Hello ${user.name}, you have a ${user.role} role.`);
}
    
asyncAwait();

class UserStorage {
    async getUserWithRole(user, password) {
        const user = await this.loginUser(user, password);
        const role = await this.getRoles(user);
        return role;
    }
}

UserStorage
.getUserWithRole(user, password)
.catch(console.log)
.then(console.log);

class UserStorage {
    // 이거 추가함
    async getUserWithRole(user, password) {
        const user = await this.loginUser(user, password);
        const role = await this.getRoles(user);
        return role;
    }
}

// 그리고 쓸때는
// promise chaining -> ✨ async/await ✨
userStorage
.getUserWithRole() //
.catch(console.log)
.then(console.log);