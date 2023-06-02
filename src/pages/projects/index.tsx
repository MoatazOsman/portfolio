import LineGradient from "@/components/lineGradient";
import Project from "@/components/project";
import { motion } from "framer-motion";
import UBACoverImage from "@/assets/uba.webp";
import SILACoverImage from "@/assets/sila.webp";
import AmonCoverImage from "@/assets/amon.webp";
import AvvocatoflashCoverImage from "@/assets/avvocatoflash.webp";


const Projects = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="projects" className="py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="mx-auto text-center md:w-2/4"
      >
        <div>
          <p className="mb-5 font-playfair text-4xl font-semibold">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="my-10">
          Description about the projects blablalblalblalblalb{" "}
        </p>
      </motion.div>

      {/* PROJECTS */}

      <div className="flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariant}
          className="sm:grid sm:grid-cols-3"
        >
          <div className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red p-10 text-center font-playfair text-2xl font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Avvocatoflash"
            description="SILA is a Mobile Banking application"
            coverImagePath={SILACoverImage}
          />
          <Project
            title="Amon"
            description="Amon is a Mobile Banking application"
            coverImagePath={AmonCoverImage}
          />

          {/* ROW */}
          <Project
            title="UBA"
            description="UBA is a Mobile Banking application"
            coverImagePath={UBACoverImage}
          />
          <Project
            title="Avvocatoflash"
            description="SILA is a Mobile Banking application"
            coverImagePath={AvvocatoflashCoverImage}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
