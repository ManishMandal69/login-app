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