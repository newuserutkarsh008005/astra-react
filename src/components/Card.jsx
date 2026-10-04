import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from "./LanguageContext";
const Card = ({ elem, isActive }) => {
  const { t } = useLanguage();
  console.log(elem)
  return (
    <div className="flex justify-center pt-6 pb-8 ">
      <div
        className={`w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform ${
          isActive ? "scale-110" : "scale-100 opacity-60"
        }`}
      >
        <div className="h-56 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={elem.image}
            alt={t(elem.title)}
          />
        </div>

        <div className="p-5 bg-gray-300">
          <h3 className="text-xl font-bold">{t(elem.title)}</h3>

          <p className="text-sm text-gray-500">{t(elem.category)}</p>

          <p className="mt-2 text-lg font-semibold text-green-600">
            ₹{elem.price}
          </p>

          <p className="mt-3 text-sm text-gray-600">
            {t(elem.description)}
          </p>

          <Link to={`/explore/${elem.id}`}  ><button  className="mt-4 w-full rounded-lg bg-amber-500 py-2 text-white text-lg hover:bg-amber-600">
            {t("Book Now")}
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Card