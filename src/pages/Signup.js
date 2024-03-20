import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-white font-bold text-2xl mt-12">Sign up</h2>
        <form action="" className="flex flex-col w-[380px] gap-4">
          <div className="flex flex-col mt-4">
            <label className="font-medium" htmlFor="email">
              Email or username
            </label>
            <input
              className="h-10 rounded-[4px] bg-transparent border border-gray-500 pl-2 mt-2 text-white"
              id="email"
              type="text"
              name="email"
              placeholder="Email or username"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="h-10 rounded-[4px] bg-transparent border border-gray-500 pl-2 mt-2 text-white"
              id="password"
              name="password"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="confirm-password">
              Confirm password
            </label>
            <input
              className="h-10 rounded-[4px] bg-transparent border border-gray-500 pl-2 mt-2 text-white"
              id="confirm-password"
              name="confirm-password"
              type="text"
              placeholder="Confirm password"
            />
          </div>

          <Button
            className={'bg-green-500 text-black text-xl font-semibold my-6'}
            onClick={() => {}}
            title={'Sign up'}
          />
        </form>
        <div className="flex justify-center items-center">
          <div className="w-[180px] py-[0.4px] bg-gray-600 opacity-50"></div>
          <p className="mx-2">Or</p>
          <div className="w-[180px] py-[0.4px] bg-gray-600 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Sign up with Google'}
            icon={<FaGoogle />}
          />
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Sign up with Facebook'}
            icon={<FaFacebook />}
          />
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Sign up with Apple'}
            icon={<FaApple />}
          />
        </div>
        <div className="w-[380px] py-[0.4px] bg-gray-600 mt-8 opacity-50"></div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-white font-medium text-sm">Already have an account?</p>
          <Link to="/signup" className="text-white font-medium text-sm underline">
            Sign in to Music Party
          </Link>
        </div>
        <p className="my-14 text-[0.6rem] w-[380px] text-center text-gray-200">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </>
  );
}

export default Signup;
