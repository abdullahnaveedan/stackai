import { useNavigate } from "react-router-dom";

const ProjectCard = ({ product }) => {
  const navigate=useNavigate();
  return (
    <div
      className="w-[220px] h-[250px] rounded-xl overflow-hidden shadow-custom cursor-pointer"
      onClick={()=>navigate("/CreateProject")}
    >
      {/* Render the product data dynamically */}
      <div className="w-[100%] h-[65%] bg-gray-200 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          dangerouslySetInnerHTML={{ __html: product.svg.replace(/\\/g, "") }}
          className="w-[60px] h-[60px] overflow-hidden"
        ></svg>
      </div>
      <h1 className="text-[#31295e] font-semibold text-base px-2 mt-1">
        {product.title}
      </h1>
      <p className="text-[#bf5670] font-normal text-[13px] px-2 pb-2">
        {product.description}
      </p>
    </div>
  );
};

export default ProjectCard;
