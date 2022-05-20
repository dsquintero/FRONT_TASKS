import http from "./http";

export async function singleTask({ id }) {
  return http.get(`/task/${id}`).then(({ data: json }) => {
    return json;
  });
}

export async function tasks() {
  return http.get(`/task`).then(({ data: json }) => {
    return json;
  });
}

export async function newTask({ title, description }) {
  return http.post(`/task`, { title, description }).then(({ data: json }) => {
    return json;
  });
}

export async function removeTask({ id }) {
  return http.delete(`/task/${id}`).then(({ data: json }) => {
    return json;
  });
}

export async function updateTask({ id, title, description, complete }) {
  return http
    .patch(`/task/${id}`, { title, description, complete })
    .then(({ data: json }) => {
      return json;
    });
}
