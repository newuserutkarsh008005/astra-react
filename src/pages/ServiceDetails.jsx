import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Currency } from "lucide-react";
import Slotdet from "../components/Slotdet";
import { useUser } from "../components/UserContext";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const {dbuser}=useUser()
  const [popup, setpopup] = useState(false);
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
      "https://astra-backend-live-ver1.onrender.com/create_order",
      tid,
    );
    
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.data.razorpay.amount,
      currency: data.data.razorpay.currency,
      name: "Astra",
      description: data.data.razorpay.service_title,
      order_id: data.data.razorpay.order_id,

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

          console.log("BACKEND RESPONSE");
          console.log(datav.data);
        } catch (err) {
          console.log("ERROR");
          console.log(err.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  console.log(coldat);
  

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Subtle Space Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at top, rgba(99,102,241,0.12), transparent 35%),
            radial-gradient(circle at bottom right, rgba(168,85,247,0.08), transparent 30%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                {service.category}
              </p>

              <h1 className="text-5xl md:text-6xl font-light tracking-tight mt-4">
                {service.title}
              </h1>

              <div className="flex items-center gap-4 mt-6 text-gray-400">
                <span>★ 4.9 Rating</span>
                <span>•</span>
                <span>2,300+ Consultations</span>
              </div>

              <p className="text-gray-300 text-lg leading-8 mt-8 max-w-4xl">
                {service.description}
              </p>
            </div>
          </div>

          {/* Checkout Card */}
          
          <div>
            <div
              className="
                sticky
                top-10
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
              "
            >
              <p className="text-gray-500 text-sm uppercase tracking-widest">
                Booking Summary
              </p>

              <div className="mt-8">
                <p className="text-sm text-gray-400">Consultation Fee</p>

                <h2 className="text-5xl font-light mt-2">₹{service.price}</h2>
              </div>

              <div className="mt-10 space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Session Type</span>
                  <span>Premium Consultation</span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>30 Minutes</span>
                </div>

                 <Slotdet updatepayment={setpayment} coldata={setcoldata}/>
               
              </div>

              <div className="border-t border-white/10 mt-8 pt-8">
              {payment?
                <button
                  className="
                    w-full
                    bg-white
                    text-black
                    py-4
                    rounded-2xl
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
