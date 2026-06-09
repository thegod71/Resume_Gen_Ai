import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { register, login, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const data = await login({ email, password });
      //kui ki login hina ka sth user ka data aayega backend se aur usko setUser me set kar denge taki user ka data context me store ho jaye aur hum usko app ke kisi bhi component me access kar sake
      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const data = await register({ username, email, password });
      setUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      const data = await logout();
      setUser(null);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  // kui ki jab bhi app load hoga to hm getMe function ko call karenge taki agar user already login hai to uski information mil jaye aur agar user login nahi hai to user ki state null rahe. Aur isse hamare app me user ki information available ho jaye.

  useEffect(() => {
    const getAndSetUser = async () => {
      const data = await getMe(); // ya  ky krga ki backend se user ka current user ka data lay kr aa ja aaga aur usko setUser me set kar dega taki user ki state me user ka data aa jaye aur agar user login nahi hai to user ki state null rahegi
      // ya token pr depend krta hai ki user login hai ya nahi agar token valid hai to user ka data aayega aur agar token invalid hai to user ki state null rahegi
      setUser(data.user);
      setLoading(false);
    };
    getAndSetUser();
  }, []);
  return { user, loading, handleLogin, handleRegister, handleLogout };
};
