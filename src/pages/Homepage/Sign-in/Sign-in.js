import cs from "./Sign-in.module.css";
import eyeIcon from "../../../assets/img/sign/eye.svg";

function SignIn() {
    return (

        <div className={cs["sign-in"]}>
            <div className={cs["sign-in_wrapper"]}>

                <div className={cs["side-logo"]}>
                    <span>SaaS Kit</span>
                </div>

                <h1 className={cs["sign-in_header"]}>Sign In</h1>

                <input className={cs["email"]} type="text" placeholder="Email"></input>

                <div className={cs["password_input"]}>
                    <input className={cs["password"]} type="text" placeholder="Password"></input>
                    <img src={eyeIcon} alt="Eye" className={cs["eye_icon"]} />
                </div>

                <div className={cs["checkbox_wrapper"]}>
                    <input className={cs["checkbox_icon"]} type="checkbox" />
                    <span>Keep me logged in</span>
                </div>

                <div className={cs["btn-wrapper"]}>
                    <button className={cs["btn-sign_in"]}> Sign in</button>
                </div>

                <div className={cs["text-wrapper"]}>
                    <p className={cs["text-sign_in"]}> Don't have an account?
                        <span>Sign up</span></p>
                </div>

            </div>

        </div>
    );
}
export default SignIn;