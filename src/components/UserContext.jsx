import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [dbuser, setdbuser] = useState(null);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    async function fetchuser() {
      if (!isAuthenticated || !user) return;

      try {
        const res = await axios.post(
          "https://astra-backend-live-ver1.onrender.com/auth/sync_user",
          user
        );

        console.log("SYNC RESPONSE");
        console.log(res.data);

        setdbuser(
          res.data.user || res.data.userDet
        );
      } catch (err) {
        console.log(err);
      }
    }

    fetchuser();
  }, [user, isAuthenticated]);

  return (
    <Usercontext.Provider
      value={{
        dbuser,
        setdbuser,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};

export const useUser = () =>
  useContext(Usercontext);