import DownloadButton from '../components/Download';
import Experience from '../components/resume2/Experience';
import Header from '../components/resume2/Header';
import Projects from '../components/resume2/Projects';
import Skills from '../components/resume2/Skills';
import Education from '../components/resume2/Education';
import Summary from '../components/resume2/Summary';

export default function Resume2() {
    return (
        <div className="flex flex-col items-center justify-start bg-gray-200">
            <div className="w-3/5 h-auto flex flex-col items-center justify-center bg-white p-3 shadow-xl gap-2">
                <Header />
                <Education />
                <Summary />
                <Experience />
                <Projects />
                <Skills />
                <DownloadButton />
            </div>
        </div>
    );
}
