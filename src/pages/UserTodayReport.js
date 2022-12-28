import { FitnessCenter, Logout } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserTodayReport() {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }
  return (
    <>
      <AppBar
        position="relative"
        sx={{ display: "flex", flexDirection: "row", pr: "3%" }}
      >
        <Toolbar sx={{ width: "100vw" }}>
          <FitnessCenter sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Informações do monstro
          </Typography>
        </Toolbar>
        <IconButton
          onClick={signOut}
          aria-label="logout"
          sx={{ color: "#ffffff" }}
        >
          <Logout fontSize="medium" sx={{ alignSelf: "center" }} />
        </IconButton>
      </AppBar>
    </>
  );
}
