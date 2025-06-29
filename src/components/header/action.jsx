import CV from "../../../public/resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf";
import Resume from "../../../public/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf";

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
    <div className="flex flex-col items-start gap-5">
      {/* Pass the file paths as string */}
      <button
        onClick={() =>
          handleDownload("/resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="btn"
      >
        Download CV
      </button>

      <button
        onClick={() =>
          handleDownload("/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf")
        }
        className="btn"
      >
        Download Resume
      </button>

      <button onClick={scrollToContact} className="btn btn-primary">
        Let's Have a Talk
      </button>
    </div>
  );
};

export default Action;
