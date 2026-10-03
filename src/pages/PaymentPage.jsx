import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidedashboard from "../components/Sidedashboard";
import { useUser } from "../components/UserContext";

const PaymentPage = () => {
  const dbuser = useUser();

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getPaymentDetail = async () => {
    try {
      const resp = await axios.post(
        "https://astra-backend-live-ver1.onrender.com/get_payment_details",
        dbuser
      );

      console.log(resp.data);

      setPayments(resp.data.det || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dbuser) {
      getPaymentDetail();
    }
  }, [dbuser]);

  const successPayments = payments.filter(
    (p) => p.status?.toUpperCase() === "SUCCESS"
  );

  const failedPayments = payments.filter(
    (p) => p.status?.toUpperCase() === "FAILED"
  );

  const totalRevenue = successPayments.reduce(
    (sum, p) => sum + Number(p.amount || 0),
    0
  );

  const filteredPayments = payments.filter((payment) => {
    const keyword = search.toLowerCase();

    return (
      payment.razorpayPaymentId?.toLowerCase().includes(keyword) ||
      payment.razorpayOrderId?.toLowerCase().includes(keyword) ||
      payment.serviceId?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="flex min-h-screen bg-[#0B1120] p-6 max-md:flex-col max-md:p-3">

      <Sidedashboard />

      <div className="flex-1 p-8 overflow-auto max-md:p-2 max-md:overflow-visible">

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 max-md:gap-3 max-md:mb-6">

          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg max-md:p-4">
            <p className="text-gray-400">
              Revenue
            </p>

            <h2 className="text-4xl font-bold text-yellow-400 mt-3 max-md:text-2xl max-md:mt-2">
              ₹{totalRevenue / 100}
            </h2>
          </div>


          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg max-md:p-4">
            <p className="text-gray-400">
              Payments
            </p>

            <h2 className="text-4xl font-bold text-white mt-3 max-md:text-2xl max-md:mt-2">
              {payments.length}
            </h2>
          </div>


          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg max-md:p-4">
            <p className="text-gray-400">
              Successful
            </p>

            <h2 className="text-4xl font-bold text-green-400 mt-3 max-md:text-2xl max-md:mt-2">
              {successPayments.length}
            </h2>
          </div>


          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg max-md:p-4">
            <p className="text-gray-400">
              Failed
            </p>

            <h2 className="text-4xl font-bold text-red-400 mt-3 max-md:text-2xl max-md:mt-2">
              {failedPayments.length}
            </h2>
          </div>

        </div>


        {/* Table */}

        <div className="bg-[#111827] rounded-3xl border border-yellow-500/20 shadow-2xl overflow-hidden max-md:rounded-2xl">

          {/* Top */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b border-gray-700 max-md:p-4">

            <h2 className="text-2xl font-semibold text-white max-md:text-xl">
              Recent Transactions
            </h2>

            <input
              type="text"
              placeholder="Search Payment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                bg-[#0B1120]
                border border-gray-700
                rounded-xl
                px-4
                py-3
                text-white
                w-full
                md:w-80
                focus:outline-none
                focus:border-yellow-500
              "
            />

          </div>


          {loading ? (

            <div className="h-80 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-yellow-500/20 bg-[#0B1120] px-5 py-3 shadow-lg shadow-yellow-500/5">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-yellow-500/30 border-t-yellow-500" />
                <span className="text-gray-300 text-lg">Loading payments...</span>
              </div>
            </div>

          ) : filteredPayments.length === 0 ? (

            <div className="h-80 flex flex-col justify-center items-center max-md:px-4 text-center">

              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-2 border-yellow-500/30 border-t-yellow-500" />

              <h2 className="text-white text-2xl mt-4 max-md:text-xl">
                No Payments Found
              </h2>

              <p className="text-gray-400 mt-2">
                Your payment history will appear here.
              </p>

            </div>

          ) : (

            <>
              {/* ========================================= */}
              {/* DESKTOP TABLE — YOUR ORIGINAL TABLE */}
              {/* ========================================= */}

              <div className="hidden md:block overflow-x-auto">

                <table className="w-full">

                  <thead className="bg-[#0B1120]">

                    <tr>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Order ID
                      </th>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Service
                      </th>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Amount
                      </th>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Status
                      </th>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Booking Date
                      </th>

                      <th className="px-6 py-5 text-left text-gray-400">
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {filteredPayments.map((payment) => (

                      <tr
                        key={payment.id}
                        className="border-b border-gray-800 hover:bg-[#0B1120] transition"
                      >

                        <td className="px-6 py-5 text-gray-300">
                          {payment.razorpayOrderId}
                        </td>

                        <td className="px-6 py-5 text-gray-300">
                          {payment.service.title?.slice(0, 10)}...
                        </td>

                        <td className="px-6 py-5 text-yellow-400 font-semibold">
                          ₹{payment.amount / 100 || "-"}
                        </td>

                        <td className="px-6 py-5">

                          <span
                            className={`px-4 py-1 rounded-full text-sm font-semibold ${
                              payment.status?.toUpperCase() === "SUCCESS"
                                ? "bg-green-500/20 text-green-400"
                                : payment.status?.toUpperCase() === "FAILED"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {payment.status}
                          </span>

                        </td>

                        <td className="px-6 py-5 text-gray-400">
                          {payment
                            ? new Date(
                                payment.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </td>

                        <td className="px-6 py-5">

                          <button className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold px-4 py-2 rounded-lg">
                            Receipt
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>


              {/* ========================================= */}
              {/* MOBILE ONLY */}
              {/* ========================================= */}

              <div className="md:hidden p-3">

                <div className="flex flex-col gap-3">

                  {filteredPayments.map((payment) => (

                    <div
                      key={payment.id}
                      className="
                        bg-[#0B1120]
                        border border-white/10
                        rounded-2xl
                        p-4
                      "
                    >

                      {/* Service + Status */}

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <p className="text-white font-semibold text-base break-words">
                            {payment.service.title}
                          </p>

                          <p className="text-gray-500 text-xs mt-1">
                            Payment Transaction
                          </p>

                        </div>

                        <span
                          className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                            payment.status?.toUpperCase() === "SUCCESS"
                              ? "bg-green-500/20 text-green-400"
                              : payment.status?.toUpperCase() === "FAILED"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {payment.status}
                        </span>

                      </div>


                      {/* Divider */}

                      <div className="border-t border-white/10 my-4" />


                      {/* Amount */}

                      <div className="flex justify-between items-center mb-3">

                        <span className="text-gray-500 text-sm">
                          Amount
                        </span>

                        <span className="text-yellow-400 font-semibold">
                          ₹{payment.amount / 100 || "-"}
                        </span>

                      </div>


                      {/* Order ID */}

                      <div className="mb-3">

                        <p className="text-gray-500 text-xs mb-1">
                          Order ID
                        </p>

                        <p className="text-gray-300 text-xs break-all">
                          {payment.razorpayOrderId}
                        </p>

                      </div>


                      {/* Booking Date */}

                      <div className="flex justify-between items-center mb-4 gap-3">

                        <span className="text-gray-500 text-sm">
                          Booking Date
                        </span>

                        <span className="text-gray-300 text-sm">
                          {payment
                            ? new Date(
                                payment.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </span>

                      </div>


                      {/* Receipt */}

                      <button
                        className="
                          w-full
                          bg-yellow-500
                          hover:bg-yellow-400
                          transition
                          text-black
                          font-semibold
                          px-4
                          py-3
                          rounded-xl
                        "
                      >
                        Receipt
                      </button>

                    </div>

                  ))}

                </div>

              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default PaymentPage;