import styles from "./Banner.module.css";
import Image from "next/image";

const Banner = (props: { title: string; subTitle: string; imgUrl: string }) : React.JSX.Element => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("play");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play Icon"
                width={32}
                height={32}
              ></Image>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
        }}
      ></div>
    </div>
  );
};

export default Banner;
