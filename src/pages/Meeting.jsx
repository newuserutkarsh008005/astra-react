import { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import toast from "react-hot-toast";

const Meeting = () => {
  const { user, isAuthenticated } = useAuth0();
  const { dbuser } = useUser();

  const { id } = useParams();
  const navigate = useNavigate();

  const meetingref = useRef(null);

  const [roomId, setRoomId] = useState(null);

  console.log("Meeting Loaded");
  console.log("Auth0 User:", user);
  console.log("Authenticated:", isAuthenticated);
  console.log("Booking Id:", id);
  console.log("DB User:", dbuser);
  console.log("Room Id:", roomId);

  async function checkuser() {
    try {
      console.log("Checking meeting access...");

      const res = await axios.get(
        `https://astra-backend-live-ver1.onrender.com/meeting/access/${id}`,
        {
          params: {
            userId: dbuser.id,
          },
        }
      );

      console.log("Meeting Access Response");
      console.log(res.data);

      if (res.data.success) {
        setRoomId(res.data.roomId);
      } else {
        toast.error("Meeting Access Denied");
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);

      toast.error("Meeting Access Error");
      navigate("/dashboard");
    }
  }

  useEffect(() => {
    if (!dbuser?.id) {
      console.log("Waiting for dbuser...");
      return;
    }

    checkuser();
  }, [dbuser]);

  useEffect(() => {
    if (!roomId) {
      console.log("Waiting for room...");
      return;
    }

    console.log("Initializing Zego");

    const appId = Number(
  import.meta.env.VITE_ZEGO_APP_ID
);

    const serverSecret =
       import.meta.env.VITE_ZEGO_SERVER_SECRET;
    const zegoUserId =
      dbuser?.id ||
      String(Math.floor(Math.random() * 100000));

    const userName =
      dbuser?.name || "Guest User";
console.log(roomId);


    const kitToken =
      ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        zegoUserId,
        userName
      );

    const zp =
      ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingref.current,

      scenario: {
        mode:
          ZegoUIKitPrebuilt.OneONoneCall,
      },

      showPreJoinView: true,
      showTextChat: true,
      showScreenSharingButton: true,
      showUserList: true,

      onLeaveRoom: () => {
        toast.success(
          "Thanks for the session!"
        );

        navigate("/dashboard");
      },
    });

    return () => {
      try {
        console.log("Destroying room...");
        zp.destroy();
      } catch (err) {
        console.log(err);
      }
    };
  }, [roomId, dbuser]);

  return (
    <div
      ref={meetingref}
      className="w-screen h-screen bg-gray-950"
    />
  );
};

export default Meeting;