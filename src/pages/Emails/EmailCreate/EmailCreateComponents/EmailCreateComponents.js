import cs from "./EmailCreateComponents.module.css";
import SearchbarInput from "../../../../components/SearchbarInput/SearchbarInput";
import ComponentTypeBox from "./ComponentTypeBox/ComponentTypeBox";

// COMPONENTS ICONS
import text from "../../../../assets/img/components/text.svg";
import image from "../../../../assets/img/components/image.svg";
import video from "../../../../assets/img/components/video.svg";
import button from "../../../../assets/img/components/button.svg";
import divider from "../../../../assets/img/components/divider.svg";
import socials from "../../../../assets/img/components/socials.svg";
import footer from "../../../../assets/img/components/footer.svg";
import header from "../../../../assets/img/components/header.svg";


function EmailCreateComponents() {
  return (

    <div className={cs["components-container"]}>
      <div className={cs["email-recepients_header"]}>
        <h3>Components</h3>
        <SearchbarInput
          title="Search components"
        />
      </div>
      <div className={cs["email-create-components"]}>
        <ComponentTypeBox
          icon={text}
          name="Text"
        />
        <ComponentTypeBox
          icon={image}
          name="Image"
        />
        <ComponentTypeBox
          icon={video}
          name="Video"
        />
        <ComponentTypeBox
          icon={button}
          name="Button"
        />
        <ComponentTypeBox
          icon={divider}
          name="Divider"
        />
        <ComponentTypeBox
          icon={socials}
          name="Social"
        />
        <ComponentTypeBox
          icon={footer}
          name="Footer"
        />
        <ComponentTypeBox
          icon={header}
          name="Header"
        />

      </div>

    </div>


  );
}
export default EmailCreateComponents;