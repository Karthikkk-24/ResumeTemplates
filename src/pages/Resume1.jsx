import Certificates from "../components/resume1/Certificates";
import Education from "../components/resume1/Education";
import Header from "../components/resume1/Header";
import Projects from "../components/resume1/Projects";
import Skills from "../components/resume1/Skills";
import WorkExperience from "../components/resume1/WorkExperience";

export default function Resume1() {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
                <Header />
                <Education />
                <Skills />
                <WorkExperience />
                <Projects />
                <Certificates />
            </div>
        </div>
    );
}
