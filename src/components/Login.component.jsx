import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="text-white">
                <h1 className="text-2xl font-semibold mb-10">
                    Log in to your Account
                </h1>
                <div>
                    <form>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="email"
                                name="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                for="floating_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value=""
                                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label
                                    for="remember"
                                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="forgot-password"
                                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Lost Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign in to your account
                        </button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Don't have an account?{" "}
                            <Link
                                to="register"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
