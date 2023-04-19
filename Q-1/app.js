function addPropertyToUserObject(propertyName, propertyValue) {
    return function() {
      this[propertyName] = propertyValue;
      return this;
    };
  }
  
  const user = {
    name: "John Doe",
    age: 25,
  };
  
  const addEmailToUser = addPropertyToUserObject("email", "johndoe@example.com");
  
  const updatedUser = addEmailToUser.call(user);
  
  console.log(updatedUser); 
  