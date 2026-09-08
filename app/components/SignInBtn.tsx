import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Snackbar } from "@mui/material";

const SignInBtn = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0();

  const TrySignIn = async () => {
    try {
      await getAccessTokenSilently();
    } catch (e) {
      setToastOpen(true);
      console.error(e);
      loginWithRedirect();
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <button
          onClick={TrySignIn}
          style={{
            fontSize: "0.875rem",
            fontWeight: 400,
            color: "rgba(255,255,255,0.65)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "6px",
            padding: "6px 12px",
            cursor: "pointer",
            minHeight: 32,
            transition: "all 100ms ease-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.90)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.24)";
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Log in
        </button>
      )}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message="Sign in failed"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default SignInBtn;
