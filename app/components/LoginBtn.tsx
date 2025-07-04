import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Button, Snackbar } from "@mui/material";
import Dropdown from "./Dropdown";

const LoginBtn = () => {
  const { user, isAuthenticated, loginWithPopup, loginWithRedirect, logout } =
    useAuth0();

  const Logout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  const [toastOpen, setToastOpen] = useState(false);

  const TryLogin = async () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      loginWithRedirect();
      return;
    }

    try {
      await loginWithPopup();
    } catch (e) {
      console.error(e);
      setToastOpen(true);
      setTimeout(() => loginWithRedirect(), 3000);
    }
  };

  const TryLogout = async () => {
    try {
      await Logout();
    } catch (e) {
      console.error(e);
      alert("Couldn't Logout");
    }
  };

  const GoToProfile = () => {
    console.log("Profile Selected");
  };

  return (
    <>
      <div className={isAuthenticated ? "flex items-center gap-5" : undefined}>
        <div>
          {!isAuthenticated && (
            <Button variant="contained" onClick={TryLogin}>
              Sign in
            </Button>
          )}
        </div>

        {isAuthenticated && (
          <div className="flex items-center gap-1">
            <img
              className="rounded-full size-16"
              src={user?.picture}
              alt={user?.name || "User"}
            />
            <Dropdown
              options={[
                {
                  label: user?.name || "User",
                  action: () => {},
                  disabled: true,
                  isTitle: true,
                },
                { label: "Profile", action: GoToProfile },
                {
                  label: "Settings",
                  action: () => console.log("Settings hit"),
                },
                { label: "Logout", action: TryLogout },
              ]}
            />
          </div>
        )}
      </div>

      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message="Popup login failed, redirecting..."
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default LoginBtn;
