import httpServices from "./httpServices";

const todosEndpoint = "todos/";

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
};

export default todosServices;
