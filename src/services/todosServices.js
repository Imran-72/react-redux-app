import httpServices from "./httpServices";

const todosEndpoint = "todos/";
const postsEndpoint = "posts/";

const todosServices = {
  fetch: async () => {
    const { data } = await httpServices.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpServices.post(postsEndpoint, payload);
    return data;
  },
};

export default todosServices;
