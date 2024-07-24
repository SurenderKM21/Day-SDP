// src/components/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen   ">
      <div className="w-full max-w-md p-8 space-y-6 border-2 border-blue-200 shadow-md rounded-lg dark:bg-slate-700 bg-white">
        <h2 className="text-2xl font-bold text-center dark:text-white">LOGIN</h2>
        <form className="space-y-6 ">
          <div>
            <label htmlFor="email" className="block text-sm font-medium dark:text-white">Email address</label>
            <input type="email" id="email" name="email" required className="block w-full px-3 py-2 mt-1 border  border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium dark:text-white">Password</label>
            <input type="password" id="password" name="password" required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="remember_me" className="block ml-2 text-sm dark:text-white">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">Sign in</button>
          </div>
        </form>
        <p className="text-sm text-center dark:text-white">
          Don't have an account? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
