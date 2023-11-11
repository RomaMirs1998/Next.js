import Image from "next/image";
import styles from "./Card.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import cls from "classnames"

const Card = (props: {
  imgUrl: string;
  size: "small" | "medium" | "large";
  id: number;
}): React.JSX.Element => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size,
    id
  } = props;
  const [imageUrl, setImageUrl] = useState(imgUrl);

  type Size = "small" | "medium" | "large";

  type mapType = {
    [key in Size]: string | undefined;
  };

  const classMap: mapType = {
    small: styles.smItem,
    medium: styles.mdItem,
    large: styles.lgItem,
  };

  const classname = classMap[size] || classMap.medium;

  const handleOnError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ): void => {
    setImageUrl(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };

  type Scale = {
    scaleY: number;
  } | {
    scale: number;
  };
  

  const scale : Scale = id === 0 ? {scaleY:1.1} : {scale:1.1};

  return (
    <div className={styles.container}>
  
      <motion.div
        whileHover={{
          ...scale
        }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className={cls(styles.imgMotionWrapper,classname)}
      >
        <Image
          className={styles.cardImg}
          src={imageUrl}
          alt="clifford"
          layout="fill"
          onError={handleOnError}
        ></Image>
      </motion.div>
    </div>
  );
};

export default Card;
