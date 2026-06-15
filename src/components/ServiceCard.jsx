import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, slug }) => {
  return (
    <div className="bg-white/5 border border-yellow-500/30 rounded-xl p-6 hover:scale-105 hover:border-yellow-400 transition-all duration-300 yellow-glow">
      <div className="text-yellow-400 mb-4">{Icon && <Icon size={40} />}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center text-yellow-400 hover:underline text-sm font-medium"
      >
        Learn More <ArrowRight size={14} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
