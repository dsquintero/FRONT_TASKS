export function setSession({ user = {}, token = "" }) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

export function getSession() {
  return {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user")),
  };
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem("user"));
  return Boolean(user?.first_name);
}
