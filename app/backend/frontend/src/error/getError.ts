const getError = (error: {
  response: { data: { message: any } };
  message: string;
}) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export default getError;
