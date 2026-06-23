import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { InterviewProvider } from "./features/interview/interview.context.jsx";
function App() {
  return (
    <AuthProvider>
      {/* // puri application ka under user setuser,loading ,setloading ka access hoga isliye hmne puri application ko AuthProvider ke under wrap kr diya taki jo bhi component is AuthProvider ke under hoga wo is context ka access kr sake aur use kar sake. Aur isme hm user aur setUser ko state me rakh rahe hai taki jab bhi user login ya logout kare to hm user ki state ko update kr sake aur isse hamare app me user ki information available ho jaye. */}
      <IntervieProvider>
        <RouterProvider router={router} />
      </IntervieProvider>
    </AuthProvider>
  );
}

export default App;
