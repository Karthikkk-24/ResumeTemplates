export default function Header() {
    return (
        <header className="w-full h-auto flex items-center justify-between">
            <div className="w-auto h-full flex flex-col items-start justify-start">
                <h2 className="font-bold text-2xl uppercase">Karthik Shettigar</h2>
                <a href="https://linkedin.com/in/kks24">
                    Karthik Shettigar | LinkedIn
                </a>
                <a href="https://github.com/Karthikkk-24">
                    Karthikkk-24 (github.com)
                </a>
            </div>
            <div className="w-auto flex flex-col items-start justify-start">
                <p>Email: <a href="mailto:kkshettigar24@gmail.com">kkshettigar24@gmail.com</a></p>
                <p>Mobile: +91 9172187892</p>
            </div>
        </header>
    );
}
