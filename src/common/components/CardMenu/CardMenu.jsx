import React from "react";
import CardGrid from "../CardGrid/CardGrid";
import { Card, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import Title from "../Title/Title";
import useHover from "../../hooks/useHover";

const CardMenu = ({
  title,
  delay,
  backgroud = {
    from: "from-sky-300",
    via: "via-blue-500",
    to: "to-purple-600",
  },
  size = 1,
  onClicked = () => {},
  icon = () => {},
}) => {
  const [hovered, handleHover] = useHover();

  const animation = (delay) => ({
    y: 20,
    opacity: 0,
    duration: 0.5,
    delay,
  });

  return (
    <CardGrid
      size={size}
      animation={animation(delay)}
      {...handleHover}
      onClick={onClicked}
    >
      <Card
        isFooterBlurred
        className={`h-full bg-gradient-to-r
        ${backgroud.from} ${backgroud.via} ${backgroud.to}
        cursor-crosshair
        hover:rotate-2
        `}
      >
        {icon({
          size: 100,
          color: "white",
          style: {
            opacity: 0.2,
            filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))",
          },
        })}

        <motion.div
          className="absolute h-full w-full"
          initial={{
            y: 200,
          }}
          animate={{
            y: hovered ? 0 : 200,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <CardFooter
            className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100
          w-full flex justify-center items-center
          "
          >
            <Title
              className="text-white text-center text-2xl"
              textColor={"JSON"}
              textPlain={title}
            />
          </CardFooter>
        </motion.div>
      </Card>
    </CardGrid>
  );
};

export default CardMenu;
