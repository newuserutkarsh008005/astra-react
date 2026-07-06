
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
 const {dbuser}=useUser()
 
const[predata,setpredata]=useState({})
useEffect(()=>{
    if(dbuser){
        setpredata(dbuser)
    }
},[dbuser])
console.log("Is this User",predata);
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
    <div className="flex">
      <Sidedashboard />

      <div className="min-h-screen w-full bg-[#020B26] text-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-2">
            Profile Settings
          </h1>

          <p className="text-zinc-400 mb-8">
            Manage your personal information and account preferences.
          </p>

          <div className="overflow-hidden rounded-3xl border border-[#1D2A55] bg-[#07173A]">
            <div className="h-56 bg-gradient-to-r from-[#00154D] via-[#0A225C] to-[#304C82]" />

            <div className="px-8 pb-10 relative">
              <div className="-mt-20 flex flex-col md:flex-row md:items-center gap-8">
                <div>
                  <div className="relative w-32 h-32">
                    <img
                      src={predata.profileImage}
                      alt="profile"
                      className="w-full h-full rounded-full border-4 border-[#07173A] object-cover"
                    />

                    <label className="absolute bottom-2 right-2 bg-[#D4AF37] p-2 rounded-full cursor-pointer">
                      <Camera
                        size={18}
                        className="text-black"
                      />

                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="image"
                       
                      />
                    </label>
                  </div>

                  <p className="text-sm text-zinc-400 mt-3">
                    Upload Profile Photo
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold">
                    User Profile
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    Update your profile details.
                  </p>
                </div>
              </div>

              <form onSubmit={updateuser}
               
                className="mt-12"
              >
                <h3 className="text-2xl font-semibold mb-8">
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                       
                      />

                      <input
                        type="text"
                        name="name"
                         placeholder={predata.name}

                        
                        
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                      />

                      <input
                        type="email"
                        name="email"
                        value={predata.email}
                     readOnly
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Phone
                    </label>

                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                        
                      />

                      <input
                        type="text"
                        name="phone"
                       placeholder={predata.phone}
                       
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Gender
                    </label>

                    <select
                      name="gender"
                     placeholder={predata.gender}
                     
                      className="w-full px-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Date Of Birth
                    </label>

                    <div className="relative">
                      <Calendar
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                      />

                      <input
                        type="date"
                        name="dateOfBirth"
                        placeholder={predata.dataOfBirth}
                        
                        
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-zinc-300">
                      Birth Time
                    </label>

                    <div className="relative">
                      <Clock3
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                      />

                      <input
                        type="time"
                        name="birthTime"
                        placeholder={predata.birthTime}
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 text-zinc-300">
                      Birth Place
                    </label>

                    <div className="relative">
                      <MapPin
                        className="absolute left-4 top-4 text-zinc-500"
                        size={20}
                      />

                      <input
                        type="text"
                        name="birthPlace"
                        placeholder={predata.birthPlace}
                        
                        className="w-full pl-12 pr-4 py-4 bg-[#0B1D49] border border-[#243867] rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <button
                    type="submit"
                   
                    className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-xl"
                  >
                    Save
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

