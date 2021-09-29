import cs from "./Homepage.module.css";
import SignIn from "../../components/Sign-in/Sign-in";
import heroPhoto from "../../assets/img/sign/undraw_feeling_proud.svg";

function Homepage() {
    return (

        <section className={cs["landing-page"]}>

            <SignIn />

            <div className={cs["big-hero"]}>
                <div className={cs["big-hero_wrapper"]}>
                    <img src={heroPhoto} alt="Hero" className={cs["big-hero_photo"]} />
                    <h1 className={cs["big-hero_header"]}>Manage everything in one place</h1>
                    <p className={cs["big-hero_text"]}>Accusam noluisse mel et. Ius duis menandri ne, rebum exerci ad his. Quo at tollit veniam assueverit.</p>
                </div>

                <div className={cs["big-hero_dashes"]}>
                    <div className={cs["big-hero_dash"]}></div>
                    <div className={cs["big-hero_dash"]}></div>
                    <div className={cs["big-hero_dash"]}></div>
                </div>
            </div> {/* -------End of .big-hero---- */}

        </section>
    );
}
export default Homepage;