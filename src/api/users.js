import http from "./http";
import { setSession } from "../Auth";

export async function signIn({ email, password }) {
  return http.post(`/login`, { email, password }).then(({ data: json }) => {
    setSession({
      user: json,
      token: json.token,
    });
    return json;
  });
}

export async function signUp({ first_name, last_name, email, password }) {
  return http
    .post(`/register`, { first_name, last_name, email, password })
    .then(({ data: json }) => {
      setSession({
        user: json,
        token: json.token,
      });
      return json;
    });
}
