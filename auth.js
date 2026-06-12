function checkLogin(auth, db, onSuccess) {

  auth.onAuthStateChanged(async (user) => {

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const ref = db.collection("marketing_digital").doc(user.email.toLowerCase());
    const snap = await ref.get();

    if (!snap.exists || snap.data().active !== true) {
      auth.signOut();
      window.location.href = "/login";
      return;
    }

    onSuccess(user);
  });
}
