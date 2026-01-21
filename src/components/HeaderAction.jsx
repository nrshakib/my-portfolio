import { motion } from "framer-motion";

const Action = () => {
  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-5">
      {/* First button (from the left) */}
      <motion.button
        onClick={() =>
          handleDownload("/resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="btn"
        initial={{ opacity: 0, x: "-100vw" }} // Start off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        transition={{ duration: 2 }}
      >
        Download CV
      </motion.button>

      {/* Second button (from the top) */}
      <motion.button
        onClick={() =>
          handleDownload("/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="btn"
        initial={{ opacity: 0, y: "-100vh" }} // Start off-screen to the top
        animate={{ opacity: 1, y: 0 }} // Animate to normal position
        transition={{ duration: 2 }}
      >
        Download Resume
      </motion.button>

      {/* Third button (from the right) */}
      <motion.button
        onClick={scrollToContact}
        className="btn btn-primary"
        initial={{ opacity: 0, x: "100vw" }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Animate to normal position
        transition={{ duration: 2 }}
      >
        Let's Have a Talk
      </motion.button>
    </div>
  );
};

export default Action;
