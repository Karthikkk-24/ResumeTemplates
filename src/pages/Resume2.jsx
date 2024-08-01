import DownloadButton from '../components/Download';
import Education from '../components/resume1/Education';
import Experience from '../components/resume2/Experience';
import Header from '../components/resume2/Header';
import Projects from '../components/resume2/Projects';
import Skills from '../components/resume2/Skills';
import Summary from '../components/resume2/Summary';

export default function Resume2() {
    return (
        <div id='resume-container'>
            <Header />
            <Summary />
            <Experience />
            <Projects />
            <Education />
            <Skills />
            <DownloadButton />
        </div>
    );
}
