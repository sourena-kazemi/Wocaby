import { useSearchParams } from "react-router-dom";
import SignInForm from "../components/form/SignIn.jsx";
import SignUpForm from "../components/form/SignUp.jsx";
function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="mt-16 flex justify-center md:mt-24 lg:mt-32 lg:gap-x-24 xl:gap-x-40">
      <img
        src="./undraw_access_account_re_8spm.svg"
        alt="man accessing its account"
        className="xl:max-w-gl hidden max-w-sm md:block lg:max-w-lg"
      />
      {searchParams.get("page") === "sign-in" ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}
export default Auth;
