// // Generic error class
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = 'Error';
//     this.stack = '';
//   }
// };

// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = 'ReadError';
//   }
// }

// class ValidationError extends MyError {}

// class PropertyRequiredError extends ValidationError {}

// function validateUser(user) {
//   if (!user.age) {
//     throw new PropertyRequiredError('age');
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError('name');
//   }
// }

// function readUser(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       throw new ReadError('Syntax Error', error);
//     } else {
//       throw error;
//     }
//   }

//   try {
//     validateUser(user);
//   } catch (error) {
//     if (error instanceof ValidationError) {
//       throw new ReadError('Validation Error', error);
//     } else {
//       throw error;
//     }
//   }
// }

// try {
//   readUser('{bad json}');
// } catch (error) {
//   if (error instanceof ReadError) {
//     console.log(error);
//     console.log('Original error: ' + error.cause);
//   } else {
//     throw error;
//   }
// }

/* -----------------------------------
   - To run code, comment section above
   -----------------------------------
*/

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = 'FormatError';
//   }
// }

// let err = new FormatError('formatting error');

// console.log(err.message);
// console.log(err.name);
// console.log(err.stack);

// console.log('***', err instanceof FormatError);
// console.log('---', err instanceof SyntaxError);

