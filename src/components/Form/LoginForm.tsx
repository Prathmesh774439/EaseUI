// import React from 'react'

const LoginForm = () => {
  return (
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
  )
}

export default LoginForm