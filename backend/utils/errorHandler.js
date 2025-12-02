class ErrorHandler extends Error {
  //we are imherting Errorhandler class from Error (built-in Error class in JavaScript).

  constructor(message, statusCode) {
    //The constructor is a special method that runs when you create a new object from this class. It takes two parameters: message → description of the error (e.g., "User not found").statusCode → an HTTP status code (e.g., 404, 500), useful for APIs
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor); //creates a clean stack trace (the list of function calls that led to the error).
    //it removes the constructor function from the trace, making debugging easier.
  }
}

module.exports = ErrorHandler;
