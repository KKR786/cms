"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Error from "@/components/toast/Error";
import Link from "next/link";
import { credentialLogin } from "@/app/actions";

function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  async function handleSubmit( event: React.FormEvent<HTMLFormElement> ) {
    event.preventDefault();
    try {
        const formData = new FormData(event.currentTarget);

        const response = await credentialLogin(formData);

        if (!!response.error) {
            console.error(response.error);
            setError(response.error.message);
        } else {
            router.push("/");
        }
    } catch (e) {
        console.error(e);
        setError("Check your Credentials");
    }
}

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="name@company.com"
          autoFocus
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-800"
      >
        Sign in
      </button>
      <p className="text-sm font-light text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          href="/register"
          className="font-medium hover:underline text-primary-500"
        >
          Sign up
        </Link>
      </p>
      {error && <Error message={error}/>}
    </form>
  );
}

export default LoginForm;
