import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Snackbar } from "@mui/material";
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
      {!isAuthenticated && (
        <button
          onClick={TryLogin}
          style={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#FAFAFA",
            background: "rgba(139, 92, 246, 1)",
            border: "none",
            borderRadius: "6px",
            padding: "6px 14px",
            cursor: "pointer",
            minHeight: 32,
            transition: "all 100ms ease-out",
            letterSpacing: "0em",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(124, 58, 237, 1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(139, 92, 246, 1)")
          }
        >
          Sign in
        </button>
      )}

      {isAuthenticated && (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img
            style={{
              borderRadius: "50%",
              width: 32,
              height: 32,
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
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
