import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from "./LanguageContext";
import { RiArrowRightLine } from "@remixicon/react";
const Card = ({ elem, isActive, isMobile = false, itemNumber, serviceCount }) => {
  const { t } = useLanguage();
  return (
    <div className={`flex justify-center px-1 ${isMobile ? "py-2" : "pt-6 pb-8"}`}>
      <div
        className={isMobile
          ? "max-h-[calc(100svh-12rem)] w-full max-w-[24rem] overflow-y-auto text-white"
          : `w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition-transform ${
              isActive ? "scale-110" : "scale-100 opacity-60"
            }`}
      >
        {isMobile ? (
          <>
            <div className="mb-2 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.14em] text-white/45">
              <span className="text-[#d4b99b]">Astra / Service</span>
              <span>
                {String(itemNumber).padStart(2, "0")} / {String(serviceCount).padStart(2, "0")}
              </span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white/5">
              <img
                className="h-full w-full object-cover"
                src={elem.image}
                alt={t(elem.title)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <span className="absolute bottom-3 left-3 max-w-[65%] truncate rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[0.65rem] uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm">
                {t(elem.category)}
              </span>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/45 px-3 py-1 text-sm font-semibold text-[#e7cfb2] backdrop-blur-sm">
                ₹{elem.price}
              </span>
            </div>

            <div className="pt-4">
              <h3 className="break-words text-[1.4rem] font-semibold leading-tight text-white">
                {t(elem.title)}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-5 text-white/70">
                {t(elem.description)}
              </p>
              <Link
                to={`/explore/${elem.id}`}
                className="mt-4 inline-flex w-full items-center justify-between rounded-lg bg-[#d4b99b] px-4 py-3 font-semibold text-[#111318] transition-colors hover:bg-[#e7cfb2]"
              >
                <span>{t("Book Now")}</span>
                <RiArrowRightLine aria-hidden="true" size={20} />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="h-56 overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={elem.image}
                alt={t(elem.title)}
              />
            </div>

            <div className="bg-gray-300 p-5">
              <h3 className="break-words text-xl font-bold">{t(elem.title)}</h3>
              <p className="text-sm text-gray-500">{t(elem.category)}</p>
              <p className="mt-2 text-lg font-semibold text-green-600">
                ₹{elem.price}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                {t(elem.description)}
              </p>
              <Link
                to={`/explore/${elem.id}`}
                className="mt-4 block w-full rounded-lg bg-amber-500 py-2 text-center text-lg text-white hover:bg-amber-600"
              >
                {t("Book Now")}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Card