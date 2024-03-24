// src/components/UserMenu.jsx

import { useUser } from "../hooks/userContext.jsx";

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
