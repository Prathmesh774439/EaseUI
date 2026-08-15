

const OtpVerification = () => {
  return (
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
  )
}

export default OtpVerification