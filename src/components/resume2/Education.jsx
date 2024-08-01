export default function Education() {
    return (
        <section className="w-full">
            <h2 className="text-2xl w-full text-center uppercase font-semibold mb-2">Education</h2>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-end">
                    <h3 className="text-lg font-semibold">
                        Post Graduation Certification in Cybersecurity
                    </h3>
                    <p className="text-gray-600">
                        Massachusetts Institute of Technology | US (Online) |
                        2023 | 96%
                    </p>
                </div>
                <div className="flex flex-col items-end justify-start">
                    <p>(Online) United States</p>
                    <p className="font-bold">September 2022 - July 2023</p>
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start justify-start">
                    <h3 className="text-lg font-semibold">
                        Bachelors in Computer Science
                    </h3>
                    <p className="text-gray-600">
                        Bharat College of Arts and Commerce | 9.533 CGPA
                    </p>
                </div>
                <div className="flex flex-col items-end justify-start">
                    <p>Badlapur, Maharashtra</p>
                    <p className="font-bold">June 2019 - June 2022</p>
                </div>
            </div>
        </section>
    );
}
