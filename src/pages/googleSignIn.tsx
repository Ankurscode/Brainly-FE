import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const GoogleSignInButton = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("User:", user);
      console.log("Email:", user.email);
      console.log("UID:", user.uid);

      const token = await user.getIdToken();
      console.log("Token:", token);

    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      type="button"   // 🔥 CRITICAL
      onClick={signInWithGoogle}
      className="h-12 w-[22vw] bg-white rounded-lg hover:bg-slate-100"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
