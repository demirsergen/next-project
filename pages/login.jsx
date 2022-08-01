import { useSession, signIn, signOut } from "next-auth/react";

import React from "react";

const login = () => {
  const container = "w-3/4 mx-auto border-2 grid place-items-center p-8";
  const button =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={`${container}`}>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={`${container}`}>
      Not signed in <br />
      <button onClick={() => signIn()} className={`${button}`}>
        Sign in
      </button>
    </div>
  );
};

export default login;
