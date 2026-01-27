import { Link } from "react-router-dom";

export default function ActivityCard({ title, description, image, link }) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={title}
          className="object-cover w-full mb-2 rounded h-28"
        />
      )}
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </>
  );
  return link ? (
    <Link
      to={link}
      className="flex flex-col items-center p-2 text-center transition bg-white rounded shadow cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {content}
    </Link>
  ) : (
    <div className="flex flex-col items-center p-2 text-center bg-white rounded shadow">
      {content}
    </div>
  );
}
