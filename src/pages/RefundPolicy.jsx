const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Refund & Cancellation Policy
      </h1>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Cancellation
      </h2>

      <p>
        Users may cancel a consultation before the scheduled session
        time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Refunds
      </h2>

      <p>
        Refund requests are reviewed on a case-by-case basis.
      </p>

      <p className="mt-4">
        Approved refunds will be credited to the original payment
        method within 5-7 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Non-Refundable Cases
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Completed consultations</li>
        <li>Services already delivered</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Contact
      </h2>

      <p>Email: support@astra.com</p>
    </div>
  );
};

export default RefundPolicy;