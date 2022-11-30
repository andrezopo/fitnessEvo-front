import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import UserAddtionalInfos from "./pages/UserAdditionalInfos";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          email,
          setEmail,
          password,
          setPassword,
          name,
          setName,
          token,
          setToken,
          userId,
          setUserId,
        }}
      >
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="/user" element={<UserAddtionalInfos />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
