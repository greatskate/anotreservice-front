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
    console.log(id, document.getElementById(id));
    acc[key] = document.getElementById(id).value;
    return acc;
  }, {});
  console.log(values);
  UserController.register(values);
}
