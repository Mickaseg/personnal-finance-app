import Logo from "../assets/images/logo-large.svg"
import LoginForm from "@/components/forms/LoginForm.jsx";

import Illustration from "../assets/images/illustration-authentication.svg"

const Login = () => {
    return (
        <div className={"w-full h-screen bg-beige200 flex items-center justify-center p-5 gap-20"}>

            <div className={"w-full py-6 flex justify-center bg-grey900 rounded-b-lg fixed top-0 lg:hidden"}>
                <img src={Logo} alt={""}/>
            </div>

            <div className={"hidden lg:block h-full"}>
                <img src={Illustration} alt={""} className={"h-full w-full"}/>
                <img src={Logo} alt={""} className={"absolute top-6 left-16"}/>
                <span className={"text-preset1 text-white"}>Keep track of your money and save for your future</span>
                <p className={"text-preset4 text-white"}>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add
                    to savings pots easily.</p>

            </div>

            <LoginForm/>

        </div>
    );
};

export default Login;