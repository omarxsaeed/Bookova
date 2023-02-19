const respondWith = (status, statusCode, message, data, res) => {
  res.status(statusCode).json({
    status,
    message,
    data,
  });
};

export default respondWith;
