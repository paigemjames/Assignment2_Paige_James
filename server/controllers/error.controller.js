// Import any necessary modules or dependencies
// Example: const SomeModule = require('some-module');
import productsCtrl from './products.controller.js'

// Define your controller function
function handleError(req, res) {
    // Your code to handle the error
  }
  
  function getErrorMessage(errMsg) {
    console.log(errMsg);
    return errMsg;
  }
  
  // Export the controller function
  export default {
    handleError: handleError,
    getErrorMessage: getErrorMessage,
  };