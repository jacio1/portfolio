import PageHeader from "@/src/components/PageHeader";

const projects = [
  {
    id: 1,
    img: "url to image",
    title: "projectTitle",
    description: "description",
  },
  {
    id: 2,
    img: "url to image",
    title: "projectTitle2",
    description: "description",
  },
  {
    id: 3,
    img: "url to image",
    title: "projectTitle3",
    description: "description",
  },
];

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader page="PortfolioPage" />
      <div>
        <ul className="flex gap-7.5 flex-wrap justify-center">
          {projects.map((project) => (
            <li className="w-75 h-75 bg-blue-400" key={project.id}>
              <h1>{project.img}</h1>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
            </li> // вместо h1 тег image
          ))}
        </ul>
      </div>
    </div>
  );
}
