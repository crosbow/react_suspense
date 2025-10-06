import { wrapPromise } from "../utils/wrapPromise";

const fetchPosts = (url) => {
  const promise = fetch(url).then((res) => res.json());

  return wrapPromise(promise);
};

export { fetchPosts };
