function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300">
        <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          View Project
        </a>
      </div>
    );
  }
  
  export default ProjectCard;
  