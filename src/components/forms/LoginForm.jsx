import React from 'react';
import ShowPassword from "@/assets/images/icon-show-password.svg";

const LoginForm = () => {
    return (
        <form className={"bg-white rounded-lg p-6 md:p-8 w-11/12 md:w-9/12 flex flex-col gap-8 lg:w-6/12 lg:max-w-[560px]"}>

            <h1 className={"text-preset1 text-grey900 font-bold"}>Login</h1>

            <div className={"space-y-4"}>

                <div>
                    <label className={"text-preset5 font-bold text-grey500"}>Email</label>
                    <input className={"w-full flex border-2 border-grey300 px-3 py-3 rounded-xl"}
                           placeholder={"darkSasukexxXX"}></input>
                </div>

                <div>
                    <label className={"text-preset5 font-bold text-grey500"}>Password</label>
                    <div className={"flex border-2 border-grey300 px-3 py-3 rounded-xl items-center"}>
                        <input placeholder={""} className={"w-full"}></input>
                        <img alt="search icon" className={"icon w-4 h-4 ml-4"} src={ShowPassword}/>
                    </div>
                </div>

            </div>

            <button className={"w-full bg-grey900 py-4 text-preset4 font-bold rounded-xl text-white"}>
                Login
            </button>
            <button className={"w-full py-4 text-preset5 rounded-xl text-grey500"}>
                Already have an account ? <a className={"text-grey900 font-bold hover:underline"}>Sign Up</a>
            </button>

        </form>
    );
};

export default LoginForm;