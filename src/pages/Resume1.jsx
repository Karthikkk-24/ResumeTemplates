export default function Resume1() {
    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
                <Header />
                <Education />
                <SkillsSummary />
                <WorkExperience />
                <Projects />
                <Certificates />
            </div>
        </div>
    );
}
