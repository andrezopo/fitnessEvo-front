import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import UserAddtionalInfos from "./pages/UserAdditionalInfos";
import UserContext from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserTodayReport from "./pages/UserTodayReport";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#602323",
      light: "#913b3b",
      dark: "#381717",
    },
    secondary: {
      main: "#002aaa",
      light: "#5578e0",
      dark: "042589",
    },
  },
});

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer theme="colored" autoClose={2000} />
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
            <Route path="/today" element={<UserTodayReport />} />
          </Routes>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
