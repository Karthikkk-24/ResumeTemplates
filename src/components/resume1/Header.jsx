export default function Header() {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold">Karthik Shettigar</h1>
      <div className="flex justify-between mt-2">
        <div>
          <a href="https://linkedin.com/in/kks24" className="text-blue-600 hover:underline">LinkedIn: Karthik Shettigar</a><br />
          <a href="https://github.com/Karthikkk-24" className="text-blue-600 hover:underline">Github: Karthikkk-24</a><br />
          <a href="https://medium.com/@karthikkk" className="text-blue-600 hover:underline">Medium: @karthikkk</a><br />
          <a href="https://twitter.com/karthikkk24" className="text-blue-600 hover:underline">Twitter: @karthikkk24</a>
        </div>
        <div className="text-right">
          <p>Email: <a href="mailto:kkshettigar24@gmail.com" className="text-blue-600 hover:underline">kkshettigar24@gmail.com</a></p>
          <p>Mobile: 9172187892</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Professional Summary</h2>
        <p className="mt-2">
          Experienced Software Developer with a strong background in full-stack development, specializing in MERN stack technologies. 
          Skilled in building scalable web applications, RESTful APIs, and robust backend systems. 
          Possesses a Post Graduation in Cybersecurity from MIT and a proven track record of improving platform performance and user engagement. 
          Passionate about creating efficient, user-friendly solutions and staying updated with the latest web technologies.
        </p>
      </div>
    </header>
  );
}