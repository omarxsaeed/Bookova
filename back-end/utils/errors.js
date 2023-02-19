import respondWith from "./response.js";

class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const handleError = (err, res) => {
  const { message, statusCode = 500 } = err;
  respondWith(statusCode, {}, message, false, res);
};

export { CustomError, handleError };
