const validateRegisterInput = ({ username, email, password, confirm }) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "username is empty";
  }

  if (email.trim() === "" || !email.includes("@")) {
    errors.email = "email is empty || email type is wrong";
  }

  if (password.trim() === "" || confirm.trim() == "") {
    errors.password = "password || confirm is empty";
  }

  if (password.trim() !== confirm.trim()) {
    errors.confirm = "confirm password does not match,";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

const validateLoginInput = ({ username, password }) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "username is empty";
  }

  if (password.trim() === "") {
    errors.password = "password is empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports = { 
  validateRegisterInput, 
  validateLoginInput 
};
