import { Smartphone, CreditCard, Building2 } from "lucide-react";



const PaymentBillingForm = () => {
  return (
    <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Payment & Billing
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Choose a payment method and complete your payment.
        </p>
      </div>

      <form className="space-y-5">
        {/* Payment Methods */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Payment Method
          </label>

          <div className="grid grid-cols-3 gap-2">
            {/* UPI */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              <Smartphone size={18} />
              UPI
            </button>

            {/* Card - Active */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-900 bg-zinc-900 px-3 py-2.5 text-sm font-medium text-white"
            >
              <CreditCard size={18} />
              Card
            </button>

            {/* Net Banking */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              <Building2 size={18} />
              Net Banking
            </button>
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="cardName"
              className="mb-1.5 block text-sm font-medium text-zinc-700"
            >
              Cardholder Name
            </label>

            <input
              id="cardName"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="mb-1.5 block text-sm font-medium text-zinc-700"
            >
              Card Number
            </label>

            <input
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiry"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                Expiry Date
              </label>

              <input
                id="expiry"
                type="text"
                placeholder="MM/YY"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            <div>
              <label
                htmlFor="cvv"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                CVV
              </label>

              <input
                id="cvv"
                type="password"
                placeholder="•••"
                maxLength={3}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Billing Information
            </h3>
          </div>

          <div>
            <label
              htmlFor="billing"
              className="mb-1.5 block text-sm font-medium text-zinc-700"
            >
              Billing Address
            </label>

            <input
              id="billing"
              type="text"
              placeholder="Enter your billing address"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                City
              </label>

              <input
                id="city"
                type="text"
                placeholder="Mumbai"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            <div>
              <label
                htmlFor="postalCode"
                className="mb-1.5 block text-sm font-medium text-zinc-700"
              >
                Postal Code
              </label>

              <input
                id="postalCode"
                type="text"
                placeholder="400001"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="mb-1.5 block text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <input
              id="country"
              type="text"
              placeholder="India"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentBillingForm;