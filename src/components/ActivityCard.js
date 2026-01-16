import { Link } from "react-router-dom";

export default function ActivityCard({ title, description, image, link }) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </>
  );
  return link ? (
    <Link
      to={link}
      className="bg-white rounded shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {content}
    </Link>
  ) : (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
      {content}
    </div>
  );
}
