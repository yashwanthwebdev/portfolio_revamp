import React, { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";

function Intro(props) {
  // const theme = "light";
  const mainControls = useAnimation();
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <Stack
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 300,
          fontSize: "0.5rem",
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 300,
            fontSize: "0.5rem",
          },
          visible: {
            opacity: 1,
            y: 390,
            fontSize: "2rem",
          },
        }}
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <Stack
          style={{
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <Typography
            sx={{
              color: props.theme == "light" ? "black" : "white",
              fontFamily:
                props.theme == "light"
                  ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                  : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              lineHeight: "3ch",
              fontFamily: "monospace",
              fontSize: "1.3rem",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Hey, I am Yashwanth. I have professional experience in web
            development.
          </Typography>
        </Stack>
        <div ref={introRef}> </div>
      </motion.div>
    </Stack>
  );
}

export default Intro;
