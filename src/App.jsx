import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [my_data, setPersonData] = useState([]);
  useEffect(() => {
    fetch("/details.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setPersonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="border-black  lg:w-1/2 mx-auto  text-black lg:px-10">
        {/* //Image Section */}
        <section id="image-section" className=" p-4">
          <img
            className="rounded-full w-48 h-48 mx-auto object-cover"
            src={my_data.image}
            alt="Image of The Author"
          />
        </section>
        {/* Header Title Section */}
        <section id="header-title" className="space-y-2 ">
          <h1 className="text-3xl font-bold text-center mt-4 ">
            Hi 👋 I'm {my_data.name}
          </h1>
          <p className="px-5 text-base text-center text-gray-600">
            {my_data.title}
          </p>
        </section>
        {/* Description */}
        <section id="header-title" className="space-y-2 ">
          <p className=" text-base text-justify   text-gray-600 p-5">
            {my_data.description}
          </p>
        </section>
        {/* Skills, Be a lazy Programmer */}
        <section id="skills" className="p-5">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Skills
          </h2>
          <table className="w-full border-separate border-spacing-y-1">
            <tbody>
              {[
                "programming",
                "server",
                "database",
                "telemetry",
                "cloud",
                "cI_cD",
                "web_media",
                "others",
              ].map((category) => (
                <tr key={category}>
                  <td className="capitalize font-medium align-top text-left pr-15">
                    {category.replace("_", "/")}
                  </td>
                  <td>
                    {my_data?.skills?.[category]?.map((item, index) => (
                      <span key={index} className="text-gray-600 ">
                        {item}
                        {index !== my_data.skills[category].length - 1
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ================== */}
        <section id="projects" className="p-5 space-y-4">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Projects
          </h2>
          {my_data.projects?.map((project) => (
            <div className=" space-y-2 flex items-center justify-between">
              <div className="w-4/5">
                <h1 className="font-medium">{project.name}</h1>
                <h1 className="text-gray-600">{project.description}</h1>
                <h1 className="text-gray-600">
                  <span className=" ">Tech Used&nbsp;</span>:&nbsp;
                  {project.technologies.map((tech, index) => (
                    <span>
                      {tech}
                      {index !== my_data.projects?.technologies?.length - 1
                        ? ", "
                        : ""}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="w-1/5 space-y-2 text-right ">
                <a
                  href={project.repo}
                  target="_blank"
                  className="px-3 text-right italic  underline   text-gray-600"
                >
                  Code
                </a>
                <br />
                <a
                  href={project.live_demo}
                  target="_blank"
                  className="px-3 text-right italic underline   text-gray-600"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </section>
        {/* /------------- */}
        <section className="p-5">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Honors & Awards
          </h2>
          {my_data.honors_and_awards?.length === 0 ||
          !my_data.honors_and_awards?.length ? (
            <div className="text-gray-600 italic">
              No Honors and Awards to Show till now. But Inshallah One day there
              will be.
            </div>
          ) : (
            my_data.honors_and_awards?.map((hons) => (
              <div className="flex items-center justify-between space-y-2">
                <div>
                  <h2 className="font-medium">{hons.position}</h2>
                  <h2 className="text-gray-600">{hons.award_name}</h2>
                </div>
                <div className="text-right">
                  <h2>{hons.time}</h2>
                  <h2 className="text-gray-600">{hons.place}</h2>
                </div>
              </div>
            ))
          )}
        </section>

        {/* ===================== */}
        <section id="education" className="p-5">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Education
          </h2>
          {my_data.education?.map((details) => (
            <div className="mb-4 text-gray-600 flex ">
              <div className="w-2/3">
                <h2>{details.field}</h2>
                <h2>{details.institution}</h2>
                <h2>{details.location}</h2>
              </div>

              <div className="w-1/3 text-right">
                {details.start_year && details.expected_graduation ? (
                  <h2 className="italic">
                    {details.start_year} -{details.expected_graduation}
                  </h2>
                ) : (
                  ""
                )}
                {details.graduation_year ? (
                  <h2 className="italic">{details.graduation_year}</h2>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </section>

        {/* ============================= */}
        <section id="clubs" className="p-5">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Clubs
          </h2>
          {my_data.clubs?.length === 0 ? (
            <div className="text-gray-600 italic">
              No Honors and Awards to Show till now. But Inshallah One day there
              will be.
            </div>
          ) : (
            <div className="space-y-4">
              {my_data.clubs?.map((club) => (
                <div className="flex items-center justify-between">
                  <div className=" w-2/3">
                    <h2 className=" text-gray-600">{club.name}</h2>
                    <p className=" text-gray-600">{club.position}</p>
                  </div>
                  <p className=" text-gray-600 text-right  w-1/3 italic">
                    {club.joined}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ============================= */}
        <section id="Contact" className="p-5">
          <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-2">
            Connect
          </h2>
          {!my_data.contact ? (
            <div className="text-gray-600 italic">No Contact Info.</div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {my_data.contact.linkedin && (
                <a
                  href={my_data.contact.linkedin}
                  target="_blank"
                  className="px-3 py-1  bg-gray-300 border-none font-medium rounded text-gray-700 flex items-center gap-1"
                >
                  <i className="text-xl text-gray-800 ri-linkedin-box-fill"></i>
                  LinkedIn
                </a>
              )}
              {my_data.contact.github && (
                <a
                  href={my_data.contact.github}
                  target="_blank"
                  className="px-3 py-1 bg-gray-300 border-none font-medium rounded text-gray-700 flex items-center gap-1"
                >
                  <i className="text-xl text-gray-800 ri-github-fill"></i>
                  GitHub
                </a>
              )}
              {my_data.contact.email && (
                <a
                  href={`mailto:${my_data.contact.email}`}
                  className="px-3 py-1 bg-gray-300 border-none font-medium rounded text-gray-700 flex items-center gap-1"
                >
                  <i className="text-xl text-gray-800 ri-mail-fill"></i>
                  Email
                </a>
              )}
              {my_data.contact.facebook && (
                <a
                  href={my_data.contact.facebook}
                  target="_blank"
                  className="px-3 py-1 bg-gray-300 border-none font-medium rounded text-gray-700 flex items-center gap-1"
                >
                  <i className="text-xl text-gray-800 ri-facebook-circle-fill"></i>
                  Facebook
                </a>
              )}
              {my_data.contact.instagram && (
                <a
                  href={my_data.contact.instagram}
                  target="_blank"
                  className="px-3 py-1 bg-gray-300 border-none font-medium rounded text-gray-700 flex items-center gap-1"
                >
                  <i className="text-xl text-gray-800 ri-instagram-fill"></i>
                  Instagram
                </a>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
