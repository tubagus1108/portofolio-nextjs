import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Informatics Engineering
            </h5>
            <p className="font-semibold">Universitas Mikroskil (2018-2022)</p>
            <p className="my-3">
              I'm currently working for a company working on the Telkomsel Project
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Developer.</h5>
            <p className="font-semibold">Sekolah Iskandar Muda 2020-2022</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Full Stack Developer.</h5>
            <p className="font-semibold">PT Anugrah Danamas Remit 2021-2022</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">BackEnd Developer.</h5>
            <p className="font-semibold">PT. Mitra Bhakti Informasi 2022-ETC</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
