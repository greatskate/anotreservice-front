/* eslint-disable */
const INPUT_IDS = {
  firstname: 'register-firstName',
  lastname: 'register-name',
  cemail: 'register-cemail',
  email: 'register-email',
  password: 'register-password',
  address: 'register-address',
  pc: 'register-postalCode',
  city: 'register-city'
}

const handleRegisterSubmit = () => {
  const values = Object.entries(INPUT_IDS).reduce((acc, [key, id]) => {
    acc[key] = document.getElementById(id).value;
    return acc;
  }, {});
  UserController.register(values);
}
