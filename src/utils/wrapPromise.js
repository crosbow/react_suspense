export const wrapPromise = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (data) => {
      status = "success";
      response = data;
    },
    (err) => {
      status = "failed";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "failed":
        throw response;
      case "success":
        return response;
    }
  };

  return {
    read,
  };
};
