const validateForm = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'sarah' && password === 'letmein') {
        console.log(userDefaults);
        openApp();
    } else {
        failure.classList.remove('d-none');
    }

};

const form = document.getElementById('loginForm');
const app = document.getElementById('app');
const failure = document.getElementById('failure');

const userDefaults = {
    adminLevel: '3',
    progress: 0,
    roles: ['admin', 'learner', 'developer']
};


const openApp = () => {
    form.classList.add('d-none');
    app.classList.remove('d-none');
    failure.classList.add('d-none');
};

const loginFail = () => {
    failure.classList.remove('d-none');
}

addEventListener('submit', validateForm);