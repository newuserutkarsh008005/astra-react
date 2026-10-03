import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock3,
  MapPin,
  Camera,
} from "lucide-react";

import Sidedashboard from "../components/Sidedashboard";
import { useUser } from "../components/UserContext";

const ProfileSettings = () => {
  const { dbuser } = useUser();

  const [predata, setpredata] = useState({});

  useEffect(() => {
    if (dbuser) {
      setpredata(dbuser);
    }
  }, [dbuser]);

  console.log("Is this User", predata);

  async function updateuser(e) {
    e.preventDefault();

    const imageData = new FormData();
    imageData.append("file", e.target.image.files[0]);

    const linkResponse = await axios.post(
      "https://astra-backend-live-ver1.onrender.com/getimage",
      imageData
    );

    const imageLink = linkResponse.data.link;

    const vari = e.target;

    const fd = new FormData();
    fd.append("name", vari.name.value);
    fd.append("image", imageLink);
    fd.append("email", vari.email.value);
    fd.append("phone", vari.phone.value);
    fd.append("dateOfBirth", vari.dateOfBirth.value);
    fd.append("birthTime", vari.birthTime.value);
    fd.append("birthPlace", vari.birthPlace.value);

    const resp = await axios.put(
      "https://astra-backend-live-ver1.onrender.com/updateprofile",
      fd
    );

    console.log(resp.data);
  }

  return (
    <div className="flex p-6 gap-6 max-md:flex-col max-md:p-3 max-md:gap-3">
      <Sidedashboard />

      <div className="min-h-screen w-full bg-[#020B26] text-white p-8 max-md:p-2">
        <div className="max-w-6xl mx-auto">

          {/* ================= HEADER ================= */}

          <h1 className="text-5xl font-bold mb-2 max-md:text-3xl max-md:mb-2">
            Profile Settings
          </h1>

          <p className="text-zinc-400 mb-8 max-md:text-sm max-md:mb-5">
            Manage your personal information and account preferences.
          </p>


          {/* ================= PROFILE CONTAINER ================= */}

          <div className="overflow-hidden rounded-3xl border border-[#1D2A55] max-md:rounded-2xl">

            {/* ================= COVER ================= */}

            <div className="relative h-56 overflow-hidden max-md:h-36">

              <img
                src="https://res.cloudinary.com/dehj18zcx/image/upload/v1790951615/Astra__Guided_by_the_Stars_mjfkd8.png"
                alt="Profile cover"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0" />

            </div>


            {/* ================= PROFILE CONTENT ================= */}

            <div className="px-8 pb-10 relative max-md:px-4 max-md:pb-6">

              {/* Profile Header */}

              <div className="-mt-20 flex flex-col md:flex-row md:items-center gap-8 max-md:-mt-14 max-md:gap-4">

                <div>

                  <div className="relative w-32 h-32 max-md:w-24 max-md:h-24">

                    <img
                      src="https://res.cloudinary.com/dehj18zcx/image/upload/v1765953153/samples/animals/kitten-playing.gif"
                      alt="profile"
                      className="
                        w-full
                        h-full
                        rounded-full
                        border-4
                        border-[#07173A]
                        object-cover
                      "
                    />

                    <label className="
                      absolute
                      bottom-2
                      right-2
                      bg-[#D4AF37]
                      p-2
                      rounded-full
                      cursor-pointer
                      max-md:p-1.5
                    ">

                      <Camera
                        size={18}
                        className="text-black max-md:w-4 max-md:h-4"
                      />

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="image"
                      />

                    </label>

                  </div>

                </div>


                <div>

                  <h2 className="text-4xl font-bold max-md:text-2xl">
                    Utkarsh
                  </h2>

                </div>

              </div>


              {/* ================= FORM ================= */}

              <form
                onSubmit={updateuser}
                className="mt-12 max-md:mt-8"
              >

                <h3 className="text-2xl font-semibold mb-8 max-md:text-xl max-md:mb-5">
                  Personal Information
                </h3>


                <div className="grid md:grid-cols-2 gap-6 max-md:gap-4">


                  {/* ================= NAME ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Full Name
                    </label>

                    <div className="relative">

                      <User
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="text"
                        name="name"
                        placeholder={predata.name}
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          outline-none
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>


                  {/* ================= EMAIL ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Email
                    </label>

                    <div className="relative">

                      <Mail
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="email"
                        name="email"
                        value={predata.email}
                        readOnly
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          outline-none
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>


                  {/* ================= PHONE ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Phone
                    </label>

                    <div className="relative">

                      <Phone
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="text"
                        name="phone"
                        placeholder={predata.phone}
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          outline-none
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>


                  {/* ================= GENDER ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Gender
                    </label>

                    <select
                      name="gender"
                      placeholder={predata.gender}
                      className="
                        w-full
                        px-4
                        py-4
                        bg-[#0B1D49]
                        border
                        border-[#243867]
                        rounded-xl
                        max-md:px-3
                        max-md:py-3
                        max-md:text-sm
                      "
                    >

                      <option value="">
                        Select Gender
                      </option>

                      <option value="Male">
                        Male
                      </option>

                      <option value="Female">
                        Female
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                  </div>


                  {/* ================= DATE OF BIRTH ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Date Of Birth
                    </label>

                    <div className="relative">

                      <Calendar
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="date"
                        name="dateOfBirth"
                        placeholder={predata.dataOfBirth}
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>


                  {/* ================= BIRTH TIME ================= */}

                  <div>

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Birth Time
                    </label>

                    <div className="relative">

                      <Clock3
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="time"
                        name="birthTime"
                        placeholder={predata.birthTime}
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>


                  {/* ================= BIRTH PLACE ================= */}

                  <div className="md:col-span-2">

                    <label className="block mb-2 text-zinc-300 max-md:text-sm">
                      Birth Place
                    </label>

                    <div className="relative">

                      <MapPin
                        className="
                          absolute
                          left-4
                          top-4
                          text-zinc-500
                          max-md:left-3
                          max-md:top-3.5
                        "
                        size={20}
                      />

                      <input
                        type="text"
                        name="birthPlace"
                        placeholder={predata.birthPlace}
                        className="
                          w-full
                          pl-12
                          pr-4
                          py-4
                          bg-[#0B1D49]
                          border
                          border-[#243867]
                          rounded-xl
                          max-md:pl-10
                          max-md:py-3
                          max-md:text-sm
                        "
                      />

                    </div>

                  </div>

                </div>


                {/* ================= UPDATE BUTTON ================= */}

                <div className="flex justify-end mt-10 max-md:mt-6">

                  <button
                    type="submit"
                    className="
                      px-8
                      py-4
                      bg-[#D4AF37]
                      text-black
                      font-semibold
                      rounded-xl
                      max-md:w-full
                      max-md:py-3
                    "
                  >
                    Update
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileSettings;