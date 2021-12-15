import cs from "./EmailCreateContent.module.css";
import StatusTag from "../../../../components/StatusTag/StatusTag";
import bin from "../../../../assets/img/icons/baseline-delete.svg";
import img from "../../../../assets/img/components/image.svg";

function EmailCreateContent() {
  return (

    <div className={cs["email-view_section"]}>

      <div className={cs["content-header"]}>

        <div className={cs["content_left"]}>
          <div className={cs["tag_wrapper"]}>
            <StatusTag yellow>Draft</StatusTag>
          </div>

          <div className={cs["email-title"]}>
            <span>Email subject</span>
            <h2>Name</h2>
          </div>

          <div className={cs["btn-wrapper"]}>
            <span>Add Recepients</span>
          </div>



        </div>

        <div className={cs["content_right"]}>
          <div className={cs["email-icons_wrapper"]}>
            <div className={cs["red_circle"]}></div>
            <img src={bin} alt="Recycle Bin" className={cs["bin"]} />
          </div>
          <span>Saved at 16:40, 23 Dec, 2018</span>

        </div>

      </div>

      <div className={cs["email-view_content"]}>

        <div className={cs["big-box-wrapper"]}>
          <div className={cs["box-wrapper"]}>

            <div className={cs["img-wrapper"]}>
              <img src={img} alt="Big Icon" className={cs["img-big-icon"]} />
            </div>
            <span className={cs["text-drop"]}>Drop an image here</span>
            <span className={cs["text-or"]}>or</span>
            <div className={cs["btn-wrapper"]}>
              <span>Browse</span>
            </div>

          </div>
        </div>

        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
      </div >


    </div>

  );
}
export default EmailCreateContent;