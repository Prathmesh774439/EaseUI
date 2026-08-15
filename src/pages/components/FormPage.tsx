// import React from 'react'
import LoginForm from "@/components/Form/LoginForm";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import RegisterForm from "@/components/Form/RegisterForm";
import OtpVerification from "@/components/Form/OtpVerification";
import PaymentBillingForm from "@/components/Form/PaymentBillingForm";
// import { Button } from "@/components";

const FormPage = () => {
  const loginformcode = `
    import LoginForm from "@/components/Form/LoginForm";

     <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-zinc-900">Login</h2>
        <p className="mt-1 text-sm text-zinc-500">
          Enter your credentials to continue.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-zinc-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-zinc-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded" />
            Remember me
          </label>

          <button
            type="button"
            className="font-medium text-zinc-900 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          Login
        </button>
      </form>
    </div>
  
  `;

  const registerformcode = `
    import RegisterForm from "@/components/Form/RegisterForm";

   <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-zinc-900">Create Account</h2>
    <p className="mt-1 text-sm text-zinc-500">
      Create your account to get started.
    </p>
  </div>

  <form className="space-y-4">
    <div>
      <label
        htmlFor="name"
        className="mb-1.5 block text-sm font-medium text-zinc-700"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="mb-1.5 block text-sm font-medium text-zinc-700"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
    </div>

    <div>
      <label
        htmlFor="password"
        className="mb-1.5 block text-sm font-medium text-zinc-700"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="••••••••"
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
    </div>

    <div>
      <label
        htmlFor="confirmPassword"
        className="mb-1.5 block text-sm font-medium text-zinc-700"
      >
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="••••••••"
        className="w-full rounded-lg border border-zinc-300 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
    </div>

    <label className="flex items-center gap-2 text-sm text-zinc-600">
      <input type="checkbox" className="h-4 w-4 rounded" />
      I agree to the terms and conditions
    </label>

    <button
      type="submit"
      className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
    >
      Create Account
    </button>
  </form>
</div>
  `;

  const otpformcode = `
   import OtpVerification from "@/components/Form/OtpVerification";

   <div className="w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
  <div className="mb-6 text-center">
    <h2 className="text-2xl font-semibold text-zinc-900">
      Verify OTP
    </h2>

    <p className="mt-1 text-sm text-zinc-500">
      Enter the 6-digit code sent to your email.
    </p>
  </div>

  <form className="space-y-5">
    <div className="flex justify-center gap-2">
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
      <input
        type="text"
        maxLength={1}
        className="h-12 w-12 rounded-lg border border-zinc-300 text-center text-lg font-semibold outline-none focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-zinc-900 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
    >
      Verify OTP
    </button>

    <p className="text-center text-sm text-zinc-500">
      Didn't receive the code?{" "}
      <button
        type="button"
        className="font-medium text-zinc-900 hover:underline"
      >
        Resend OTP
      </button>
    </p>
  </form>
</div>
  `;

  const paymentbillcode = `
  import PaymentBillingForm from "@/components/Form/PaymentBillingForm";
  import { Smartphone, CreditCard, Building2 } from "lucide-react";

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
 `;

  const propsData = [
    {
      prop: "title",
      type: "string",
      default: '"Login"',
      description: "The title displayed at the top of the login form.",
    },
    {
      prop: "description",
      type: "string",
      default: '"Enter your credentials to continue."',
      description: "The description displayed below the form title.",
    },
    {
      prop: "emailPlaceholder",
      type: "string",
      default: '"you@example.com"',
      description: "Placeholder text displayed inside the email input.",
    },
    {
      prop: "passwordPlaceholder",
      type: "string",
      default: '"••••••••"',
      description: "Placeholder text displayed inside the password input.",
    },
    {
      prop: "rememberMe",
      type: "boolean",
      default: "true",
      description: "Controls whether the Remember Me checkbox is displayed.",
    },
    {
      prop: "forgotPassword",
      type: "boolean",
      default: "true",
      description: "Controls whether the Forgot Password option is displayed.",
    },
    {
      prop: "buttonText",
      type: "string",
      default: '"Login"',
      description: "The text displayed inside the submit button.",
    },
    {
      prop: "namePlaceholder",
      type: "string",
      default: '"Enter your name"',
      description: "Placeholder text displayed inside the name input.",
    },
    {
      prop: "confirmPasswordPlaceholder",
      type: "string",
      default: '"••••••••"',
      description:
        "Placeholder text displayed inside the confirm password input.",
    },
    {
      prop: "termsAndConditions",
      type: "boolean",
      default: "true",
      description:
        "Controls whether the terms and conditions checkbox is displayed.",
    },
     {
    prop: "title",
    type: "string",
    default: '"Verify OTP"',
    description: "The title displayed at the top of the OTP verification form.",
  },
  {
    prop: "description",
    type: "string",
    default: '"Enter the 6-digit code sent to your email."',
    description: "The description displayed below the form title.",
  },
  {
    prop: "length",
    type: "number",
    default: "6",
    description: "Defines the number of OTP input fields.",
  },
  {
    prop: "buttonText",
    type: "string",
    default: '"Verify OTP"',
    description: "The text displayed inside the verification button.",
  },
  {
    prop: "resendText",
    type: "string",
    default: '"Resend OTP"',
    description: "The text displayed for the resend OTP action.",
  },
  {
    prop: "title",
    type: "string",
    default: '"Payment & Billing"',
    description: "The title displayed at the top of the payment form.",
  },
  {
    prop: "description",
    type: "string",
    default: '"Choose a payment method and complete your payment."',
    description: "The description displayed below the form title.",
  },
  {
    prop: "defaultPaymentMethod",
    type: "string",
    default: '"card"',
    description: "Defines the payment method selected by default.",
  },
  {
    prop: "showBilling",
    type: "boolean",
    default: "true",
    description: "Controls whether billing information fields are displayed.",
  },
  {
    prop: "buttonText",
    type: "string",
    default: '"Pay Now"',
    description: "The text displayed inside the payment button.",
  },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Login Form
        </p>
        <p className="text-lg text-gray-600">
          A simple and responsive login form with email and password fields,
          remember me option, forgot password link, and a login button.
        </p>
      </header>

      <section className="space-y-4">
        <h2
          className="text-2xl font-semibold text-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          Usage
        </h2>
        <ComponentDemo code={loginformcode}>
          <LoginForm />
        </ComponentDemo>
      </section>

      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Register Form
        </p>
        <p className="text-lg text-gray-600">
          A simple and responsive registration form with name, email, password,
          confirm password fields, terms and conditions option, and a register
          button.
        </p>
      </header>

      <section className="space-y-4">
        <h2
          className="text-2xl font-semibold text-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          Usage
        </h2>
        <ComponentDemo code={registerformcode}>
          <RegisterForm />
        </ComponentDemo>
      </section>

      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          OTP Verification Form
        </p>
        <p className="text-lg text-gray-600">
          A simple and responsive OTP verification form with six-digit code
          inputs, verification button, and resend OTP option.
        </p>
      </header>

      <section className="space-y-4">
        <h2
          className="text-2xl font-semibold text-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          Usage
        </h2>
        <ComponentDemo code={otpformcode}>
          <OtpVerification />
        </ComponentDemo>
      </section>

      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Payment & Billing Form
        </p>
        <p className="text-lg text-gray-600">
          A simple and responsive payment and billing form with card details,
          billing address, and payment submission options.
        </p>
      </header>

      <section className="space-y-4">
        <h2
          className="text-2xl font-semibold text-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          Usage
        </h2>
        <ComponentDemo code={paymentbillcode}>
          <PaymentBillingForm />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2
          className="text-2xl font-semibold text-gray-600"
          style={{ color: "var(--text-color)" }}
        >
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default FormPage;
