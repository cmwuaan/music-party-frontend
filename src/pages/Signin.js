import Button from '../components/Button';
import ToggleButton from '../components/ToggleButton';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-white font-bold text-2xl mt-12">Log in to Music Party</h2>
        <div className="flex flex-col gap-4 mt-6">
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Login with Google'}
            icon={<FaGoogle />}
          />
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Login with Facebook'}
            icon={<FaFacebook />}
          />
          <Button
            className={'border-solid border-[1px]'}
            onClick={() => {}}
            title={'Login with Apple'}
            icon={<FaApple />}
          />
          <Button className={'border-solid border-[1px]'} onClick={() => {}} title={'Login with number phone'} />
        </div>
        <div className="w-[380px] py-[0.4px] bg-gray-600 mt-8 opacity-50"></div>
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
          <div className="flex items-center gap-2">
            <ToggleButton />
            <p className="text-sm">Remember me</p>
          </div>
          <Button
            className={'bg-green-500 text-black text-xl font-semibold my-6'}
            onClick={() => {}}
            title={'Log In'}
          />
        </form>
        <Link to="/" className="text-white mt-4 font-medium text-sm underline">
          Forgot your password?
        </Link>
        <p className="text-white mt-4 font-medium text-sm">Don&apos;t have an account?</p>
        <Link to="/signup" className="text-white mt-2 font-medium text-sm underline">
          Sign up for Music Party
        </Link>
        <p className="my-14 text-[0.6rem] w-[380px] text-center text-gray-200">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </>
  );
}

export default Signin;
