import SocialLoginForm from "@/components/login/SocialLoginForm";
import LoginForm from "@/components/login/LoginForm";

function Login() {
  
  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in to your account
            </h1>
            <SocialLoginForm />
            <div className="flex items-center justify-center">
                <span className="w-full h-[.115rem] bg-gray-500"></span>
                <span className="px-4 text-white">OR</span>
                <span className="w-full h-[.115rem] bg-gray-500"></span>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
