

const RegisterForm = () => {
  return (
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
  )
}

export default RegisterForm