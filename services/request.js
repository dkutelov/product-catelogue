const request = async (method, url, body) => {
  const options = {
    method,
  };
  if (body) {
    Object.assign(options, {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ ...body, returnSecureToken: true }),
    });
  }

  try {
    let response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      const {
        error: { message },
      } = data;

      throw new Error(message);
    }
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default {
  get: request.bind(this, 'GET'),
  post: request.bind(this, 'POST'),
  put: request.bind(this, 'PUT'),
  patch: request.bind(this, 'PATCH'),
  delete: request.bind(this, 'DELETE'),
};
