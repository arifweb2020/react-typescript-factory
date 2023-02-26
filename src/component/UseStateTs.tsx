import React from "react";
import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

function UseStateTs() {
  const [user, setUser] = useState<authUser | null>(null);

  const login = () => {
    setUser({
      name: "arif",
      email: "arif@gmail.com",
    });
  };

  const logout = () => {
    setUser(null);
  };

  // for type assersion
  //   const [user, setUser] = useState<authUser>({} as authUser);

  //   const login = () => {
  //     setUser({
  //       name: "arif",
  //       email: "arif@gmail.com",
  //     });
  //   };

  return (
    <div>
      <h1>Use state in Ts</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <p>{user?.name}</p>
      <p>{user?.email}</p>

      {/* for type assersion
      <h1>Use state in Ts</h1>
      <button onClick={login}>Login</button>
  
      <p>{user.name}</p>
      <p>{user.email}</p> */}
    </div>
  );
}

export default UseStateTs;
