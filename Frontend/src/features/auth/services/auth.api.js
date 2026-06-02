import axois from "axios";
// because  multiple things repeated  in the code like url and withCredentials we can create a instance of axios and set the base url and withCredentials in the instance so that we don't have to repeat it in every request
const api = axois.create({
  baseURL: "http://localhost:3000/api/auth/",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post(
      "register",
      {
        username,
        email,
        password,
      },
      // ,
      // { // ya 4 may hoga but instead of writing it in every request we can set it in the instance of axios and then we don't have to write it in every request
      //   // it is use because in the backend cookies are set and we need to send cookies in the request without this the cookies will not be sent and the user will not be authenticated
      //   withCredentials: true,
      // },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
export async function login({ email, password }) {
  try {
    const response = await api.post("login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  try {
    const response = await api.post("logout");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMe() {
  try {
    const response = await api.get("get-me");
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
