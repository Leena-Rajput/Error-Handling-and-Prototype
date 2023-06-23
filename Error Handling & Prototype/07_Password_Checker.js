/*6.Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.*/

class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password should be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user1 = new User("johnDoe", "Secret123");
  
  // Get the password (masked)
  console.log(user1.password);
  
  // Set a new valid password
  user1.password = "NewPassword456";
  
  // Set an invalid password
  user1.password = "weak";
  
  // Get the updated password (masked)
  console.log(user1.password);
  