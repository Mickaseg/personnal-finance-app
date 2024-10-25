import Logo from "../assets/images/logo-large.svg"
import LoginForm from "@/components/forms/LoginForm.jsx";

import Illustration from "../assets/images/illustration-authentication.svg"

const Login = () => {
    return (
        <div className={"w-full h-screen bg-beige200 flex items-center justify-center  lg:p-5 gap-20 "}>

            {/*TOP¨PANEL MOBILE/TABLET*/}
            <div className={"w-full py-6 flex justify-center bg-grey900 rounded-b-lg fixed top-0 lg:hidden"}>
                <img src={Logo} alt={""}/>
            </div>

            {/*LEFT PANEL DESKTOP*/}
            <div className={"hidden h-full lg:flex lg:flex-col left-panel bg-auto bg-no-repeat p-10 rounded-xl"}>
                {/*<img src={Illustration} alt={""} className={"h-full w-full"}/>*/}
                <img src={Logo} alt={""} className={"w-28 h-5"}/>
                <div className={"flex flex-col gap-6 max-w-full h-full justify-end w-8/12"}>
                    <span className={"text-preset1 text-white"}>Keep track of your money and save for your future</span>
                    <p className={"text-preset4 text-white"}>Personal finance app puts you in control of your spending.
                        Track transactions, set budgets, and add
                        to savings pots easily.</p>
                </div>
            </div>

            {/*LOGIN FORM*/}
            <LoginForm/>

        </div>
    );
};

export default Login;