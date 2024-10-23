import Logo from "../assets/images/logo-large.svg"
import LoginForm from "@/components/forms/LoginForm.jsx";

const Login = () => {
    return (
        <div className={"w-full h-screen bg-beige200 flex items-center justify-center"}>
            <div className={"w-full py-6 flex justify-center bg-grey900 rounded-b-lg fixed top-0 lg:hidden"}>
                <img src={Logo} alt={""}/>
            </div>

            <LoginForm/>

        </div>
    );
};

export default Login;