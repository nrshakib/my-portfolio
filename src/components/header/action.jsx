import CV from "../../../public/resources/files/CV_MD_Nadim_Rijvi_Shakib.pdf";
import Resume from "../../../public/resources/files/Resume_MD_Nadim_Rijvi_Shakib.pdf";

const Action = () => {
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-5">
      <button onClick={() => handleDownload(CV)} className="btn">
        Download CV
      </button>

      <button onClick={() => handleDownload(Resume)} className="btn">
        Download Resume
      </button>

      <button onClick={scrollToContact} className="btn btn-primary">
        Let's Have a Talk
      </button>
    </div>
  );
};

export default Action;
