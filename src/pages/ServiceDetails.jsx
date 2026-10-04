import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slotdet from "../components/Slotdet";
import { useUser } from "../components/UserContext";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const {dbuser}=useUser()
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [coldat,setcoldata]=useState({})
  const[payment,setpayment]=useState(false)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`https://astra-backend-live-ver1.onrender.com/services/${id}`);
        
        
        
        setService(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchService();
  }, [id]);


  if (!service) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }
  
  async function createorder() {
    if(dbuser==null){
      toast.error("Login To Pay the Services")
      return 
    }
    console.log("Before Creating the order",dbuser.id);
    
    const tid = {
    id: id,
    data:coldat,
    userId:dbuser.id
    
  };
  
    const data = await axios.post(
  "https://astra-backend-live-ver1.onrender.com/service/create_order",
  tid
);
    
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.data.razorpay.amount,
      currency: data.data.razorpay.currency,
      name: "Astra",
      description: data.data.razorpay.service_title,
      order_id: data.data.razorpay.order_id,
      theme: {
        color: "#d5bb93",
      },
      modal: {
        escape: true,
        handleback: true,
        backdropclose: false,
      },

      handler: async function (response) {
        console.log(response);
        const t_resp = {
          response: response,
          id: id,
          amount: options.amount,
          slot:coldat,
          bookingId:data.data.bookingId,
          slotId:data.data.slotId,
          userId:dbuser.id

        };

        try {
          const datav = await axios.post(
            "https://astra-backend-live-ver1.onrender.com/service/verify_payment",
            t_resp,
          );
console.log("Option yaha hai ",options);

          console.log("BACKEND RESPONSE");
          console.log(datav.data);
        } catch (err) {
          console.log("ERROR");
          console.log(err.message);
        }
      },
    };
    console.log("kya bolte ho",window.Razorpay);
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  console.log(coldat);
  

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#020617] px-4 pb-8 pt-24 text-white sm:px-6 lg:p-10">
      {/* Subtle Space Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at top, rgba(99,102,241,0.12), transparent 35%),
            radial-gradient(circle at bottom right, rgba(168,85,247,0.08), transparent 30%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-0 py-0 lg:px-10 lg:py-12">
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {/* Left Section */}
          <div className="min-w-0 lg:col-span-2">
            <img
              src={service.image}
              alt={service.title}
              className="h-[220px] w-full rounded-2xl object-cover sm:h-[320px] md:h-[400px] lg:h-[500px] lg:rounded-3xl"
            />

            <div className="mt-6 sm:mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 sm:text-sm sm:tracking-[0.3em]">
                {service.category}
              </p>

              <h1 className="mt-3 break-words text-3xl font-light leading-tight tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
                {service.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400 sm:mt-6 sm:gap-4">
                <span>★ 4.9 Rating</span>
                <span className="hidden sm:inline">•</span>
                <span>2,300+ Consultations</span>
              </div>

              <p className="mt-6 max-w-4xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
                {service.description}
              </p>
            </div>
          </div>

          {/* Checkout Card */}
          
          <div className="min-w-0 self-start">
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                sm:p-8
                lg:sticky
                lg:top-24
              "
            >
              <p className="text-gray-500 text-sm uppercase tracking-widest">
                Booking Summary
              </p>

              <div className="mt-5 sm:mt-8">
                <p className="text-sm text-gray-400">Consultation Fee</p>

                <h2 className="mt-2 break-words text-4xl font-light sm:text-5xl">₹{service.price}</h2>
              </div>

              <div className="mt-6 space-y-4 text-sm text-gray-300 sm:mt-10 sm:text-base">
                <div className="flex items-start justify-between gap-3">
                  <span>Session Type</span>
                  <span className="text-right">Premium Consultation</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <span>Duration</span>
                  <span>30 Minutes</span>
                </div>

                 <Slotdet updatepayment={setpayment} coldata={setcoldata}/>
               
              </div>

              <div className="mt-6 border-t border-white/10 pt-6 sm:mt-8 sm:pt-8">
              {payment?
                <button
                  className="
                    w-full
                    bg-white
                    text-black
                    rounded-xl
                    py-3
                    sm:py-4
                    font-medium
                    hover:bg-gray-200
                    transition
                  "
                  onClick={createorder}
                >
                  Proceed to Checkout
                </button>:<></>
}
                <p className="text-center text-gray-500 text-sm mt-4">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
