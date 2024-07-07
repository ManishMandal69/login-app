import toast from "react-hot-toast";


export function userNameValidate(username) {
    if (!username) {
      return toast.error('Username cannot be empty.');
    }
  
    // Example: A list of known usernames. This can be replaced with an API call or other logic.
    const knownUsers = ['john_doe', 'jane_smith', 'admin'];
  
    if (!knownUsers.includes(username.toLowerCase())) {
      return toast.error('Unknown username. Please try again.');
    }
  
    return null; // No errors
  }

  // Password validation function
  export function passwordValidate(password) {
    if (!password) {
      return toast.error('Password cannot be empty.');
    }else if (password.length < 6) {
      return toast.error('Password must be at least 6 characters long.');
    }
  
    // Check for at least one special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
      return toast.error('Password must contain at least one special character.');
    }
  
    return null; // No errors
  }

  // Reset Password Validation

  export function resetPasswordValidation(resetPassword) {
    if(resetPassword.newPassword !== resetPassword.confirmPassword){
        return toast.error('Password not Match...!')
    }
    return null;
  }

  // Username validation function
  export function userNameVerify(username) {
  if (!username) {
    return toast.error('Username cannot be empty.');
  }

  // Example: List of known usernames (or use your own logic/API).
  const knownUsers = ['john_doe', 'jane_smith', 'admin'];

  if (knownUsers.includes(username.toLowerCase())) {
    return toast.error('Username already exists. Please choose a different one.');
  }

  // Check for minimum length (optional).
  if (username.length < 3) {
    return toast.error('Username must be at least 3 characters long.');
  }

  // Check for allowed characters (optional).
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username)) {
    return toast.error('Username can only contain letters, numbers, and underscores.');
  }

  return null; // No errors
}

// Password validation function
export function passwordVerify(password) {
  if (!password) {
    return toast.error('Password cannot be empty.');
  } else if (password.length < 6) {
    return toast.error('Password must be at least 6 characters long.');
  }

  // Check for at least one special character
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (!specialCharRegex.test(password)) {
    return toast.error('Password must contain at least one special character.');
  }

  return null; // No errors
}

// Email validation function
export function emailVerify(email) {
  if (!email) {
    return toast.error('Email cannot be empty.');
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return toast.error('Invalid email format.');
  }

  return null; // No errors
}

// Form validation function
export function validateRegisterForm({ email, username, password }) {
  let error;

  error = emailVerify(email);
  if (error) return error;

  error = userNameVerify(username);
  if (error) return error;

  error = passwordVerify(password);
  if (error) return error;

  return null; // No errors
}

export function profileValidate({ email }) {
  let error;

  error = emailVerify(email);
  if (error) return error;

  return null; // No errors
}