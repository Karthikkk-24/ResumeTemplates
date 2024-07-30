export default function Projects() {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
            <div className="mb-4">
                <h3 className="font-semibold">
                    Student Performance Prediction | LINK
                </h3>
                <p className="text-sm text-gray-600">
                    December 23 - February 2024
                </p>
                <ul className="list-disc pl-5 mt-2">
                    <li>
                        Achieved a 96% accuracy rate in forecasting student
                        academic performance by developing and deploying a
                        machine learning model.
                    </li>
                    <li>
                        Managed data integrity by handling missing values and
                        encoding categorical variables enhancing quality by 33%.
                    </li>
                    <li>
                        Conducted experiments with both classification and
                        regression algorithms to identify the most suitable
                        approach.
                    </li>
                    <li>
                        Identified and comprehended key factors influencing
                        academic performance through thorough analysis.
                    </li>
                </ul>
            </div>
            {/* Add other projects similarly */}
        </section>
    );
}
