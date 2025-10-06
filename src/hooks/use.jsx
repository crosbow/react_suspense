const use = (promise) => {
  switch (promise.status) {
    case "pending":
      throw promise;
    case "fulfilled":
      return promise.value;
    case "rejected":
      return promise.reason;
    default:
      promise.status = "pending";
      promise.then(
        (res) => {
          promise.status = "fulfilled";
          promise.value = res;
        },
        (reason) => {
          promise.status = "rejected";
          promise.value = reason;
        }
      );

      throw promise;
  }
};
export default use;
