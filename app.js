
const github = new GitHub();
const ui = new UI();

const seachUser = document.getElementById('searchUser');

seachUser.addEventListener('keyup', (e) => {
    const uesrText = e.target.value;

    if(uesrText !== ''){
        github.getUsers(uesrText).then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.rebos);
            }
        });
    }else{
        ui.clearProfile();
    }
});