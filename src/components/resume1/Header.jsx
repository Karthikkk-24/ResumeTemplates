export default function Header() {
    return (
        <header className="mb-6">
            <h1 className="text-3xl font-bold">FULL NAME</h1>
            <div className="flex justify-between mt-2">
                <div>
                    <a
                        href="https://linkedin.com/in/Chowdhury"
                        className="text-blue-600 hover:underline"
                    >
                        Chowdhury | LinkedIn
                    </a>
                    <br />
                    <a
                        href="https://github.com/Chowdhury22"
                        className="text-blue-600 hover:underline"
                    >
                        Chowdhury22 (Chowdhury) (github.com)
                    </a>
                </div>
                <div className="text-right">
                    <p>
                        Email:{' '}
                        <a
                            href="mailto:roychowdhury22@gmail.com"
                            className="text-blue-600 hover:underline"
                        >
                            roychowdhury22@gmail.com
                        </a>
                    </p>
                    <p>Mobile: +91 9674000000</p>
                </div>
            </div>
        </header>
    );
}
