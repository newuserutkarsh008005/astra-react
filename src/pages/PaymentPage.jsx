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
    <div className="flex min-h-screen bg-[#0B1120]">
      <Sidedashboard />

      <div className="flex-1 p-8 overflow-auto">
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Payment History
            </h1>

            <p className="text-gray-400 mt-2">
              Manage all your payment transactions.
            </p>
          </div>

          <button className="mt-4 md:mt-0 bg-yellow-500 hover:bg-yellow-400 transition text-black font-semibold px-6 py-3 rounded-xl">
            Download Report
          </button>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Revenue</p>

            <h2 className="text-4xl font-bold text-yellow-400 mt-3">
              ₹{totalRevenue/100}
            </h2>
          </div>

          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Payments</p>

            <h2 className="text-4xl font-bold text-white mt-3">
              {payments.length}
            </h2>
          </div>

          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Successful</p>

            <h2 className="text-4xl font-bold text-green-400 mt-3">
              {successPayments.length}
            </h2>
          </div>

          <div className="bg-[#111827] border border-yellow-500/20 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400">Failed</p>

            <h2 className="text-4xl font-bold text-red-400 mt-3">
              {failedPayments.length}
            </h2>
          </div>
        </div>

        {/* Table */}

        <div className="bg-[#111827] rounded-3xl border border-yellow-500/20 shadow-2xl overflow-hidden">
          {/* Top */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b border-gray-700">
            <h2 className="text-2xl font-semibold text-white">
              Recent Transactions
            </h2>

            <input
              type="text"
              placeholder="Search Payment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#0B1120] border border-gray-700 rounded-xl px-4 py-3 text-white w-full md:w-80 focus:outline-none focus:border-yellow-500"
            />
          </div>

          {loading ? (
            <div className="h-80 flex items-center justify-center text-gray-400 text-lg">
              Loading payments...
            </div>
          ) : filteredPayments.length === 0 ? (
            <div className="h-80 flex flex-col justify-center items-center">
              <div className="text-6xl">💳</div>

              <h2 className="text-white text-2xl mt-4">
                No Payments Found
              </h2>

              <p className="text-gray-400 mt-2">
                Your payment history will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
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
                        ₹{payment.amount/100 || "-"}
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
                          ? new Date(payment.createdAt).toLocaleDateString()
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;