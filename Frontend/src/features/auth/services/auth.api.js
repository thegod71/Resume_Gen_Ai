import axois from "axios";
export async function register({ username, email, password }) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        username,
        email,
        password,
      },
      {
        // it is use because in the backend cookies are set and we need to send cookies in the request without this the cookies will not be sent and the user will not be authenticated
        withCredentials: true,
      },
    );
  } catch (err) {
    console.log(err);
  }
}
