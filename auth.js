import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

export function checkLogin(app, onOk) {

  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {

    if (!user) {
      window.location.replace("/login");
      return;
    }

    onOk(user);
  });
}
