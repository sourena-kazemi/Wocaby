import { Link } from "react-router-dom";
function Verification() {
  return (
    <div className="mx-auto mt-20 flex w-3/4 flex-col items-center text-center">
      <img
        src="./undraw_mailbox_re_dvds.svg"
        alt="mail box"
        className="sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
      />
      <h1 className="mb-8 mt-16 text-2xl">
        Check your mail box, we sent you a verification email
      </h1>
      <Link
        to="/auth?page=sign-in"
        className="button border-4 border-darkOrange px-4 py-1 text-lg transition-shadow"
      >
        Sign in
      </Link>
    </div>
  );
}
export default Verification;
