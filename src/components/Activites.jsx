import { MdArrowOutward as Arrow, MdTurnLeft } from "react-icons/md";
import BreadCrumb from "./BreadCrumb"
import React, { lazy } from 'react';

const Footer = lazy(() => import('./Footer'));
import { NavLink } from "react-router-dom";
import { ScrollToTop } from "./utils";
const Slider2 = lazy(() => import("./Slider2"))


const Activites = () => {
  ScrollToTop()
  const BreadCrumblinks = [{ path: '/', label: 'accuil' }, { path: '/activites', label: 'activites' }]
  return (
    <main className="h-screen mt-[4rem]">
      <BreadCrumb links={BreadCrumblinks} />
      <section className="mt-2 px-4">
        <h1 className="text-3xl border-l-6 py-2 border-blue-600 font-medium rounded-md px-2 mb-4 md:text-5xl">Activities</h1>
        <Slider2 />
        <div className="md:flex md:gap-x-4">
          <p className='text-lg md:text-2xl md:w-2/3 md:my-4 md:text-pretty' style={{ animationRangeStart: "cover calc(100vh - 20rem) ", animationRangeEnd: 'contain calc(100vh - 20rem)' }}>
            Nous entendons par activités parascolaires toutes les manifestations culturelles et sportives organisées par ECOSIG depuis sa création.
            Ces activités ne sont nullement facultatives vue qu'elles contribuent à l'épanouissement et à l'intégration de l'apprenant ainsi qu'au rayonnement culturel riche sur toute la ville.
            Le programme d'activité étalé porte sur les thèmes suivants: exposition, projection, soirée, représentation, conférence, journées d'information, remise de diplômes sports, sortie...
            L'objectif majeur de telles actions est d'ouvrir l'établissement sur son environnement et de collaborer avec le maximum de partenaires( chambres de commerce, presse régionale, délégation de l'artisanat, délégation des affaires culturelles, académie de l'éducation nationale, facultés( FLSH, FST); offices...
            ECOSIG tient avec son environnement des partenariats pour améliorer constamment son image de marque.
            La direction de ECOSIG informe son aimable public estudiantin actuel que l'école est un espace d'animation. Dans cet esprit, il y a eu création de deux ateliers pour l'année 1999-2000 : " Ecriture " et "théâtre ".
            A travers ces ateliers, les animateurs se fixent pour objectif:
          </p>
          <div className=" flex flex-col gap-y-2  rounded-md md:w-1/2 md:mt-4  outline-1 px-2 py-4 *:text-lg *:py-1 backdrop-blur-lg ">

            <p className='unit_text flex md:animate-none'><li /> Découvrir des vocations nouvelle</p>
            <p className='unit_text flex md:animate-none'><li /> Découvrir les productions écrites de belles factures</p>
            <p className='unit_text flex md:animate-none'><li /> Mettre en scène ces productions</p>
            <p className='unit_text flex md:animate-none'><li /> Permettre aux apprenants, inscrits d'affiner et de confronter leurs pratiques rédactionnelles et leurs vocations artistiques</p>
            <p className='unit_text flex md:animate-none'><li /> Apprendre à travailler en équipe</p>
            <p className='unit_text flex md:animate-none'><li /> Publier la revue trimestrielle de l'étudiant "ecosig"</p>
            <p className='unit_text flex md:animate-none'><li /> Apprendre à travailler en réseau avec les ateliers "écriture" "théâtre" de la FST, FLSH</p>
            <p className='unit_text flex md:animate-none'><li /> Participer à des concours de la belle plume(nouvelle, pièce de théâtre, poème)</p>
            <p className='unit_text flex md:animate-none'><li /> Former Eventuellement de Futurs animateurs et enfin se préparer aux grands festivals</p>
          </div>
        </div>
        <p className="mt-2 text-xl md:text-4xl  mx-auto md:w-4/5 text-center text-pretty md:mt-[4rem] ">
          Voilà les raisons du montage de cet atelier dans notre école, comme perpective d'avenir, l'école envisage de monter d'autres ateliers (club vidéo, club des internautes de ECOSIG, patrimoine).
        </p>

        <div
          className="flex flex-col **:flex **:items-center **:justify-center **:gap-2 *:text-xl  py-4 gap-y-4 *:rounded-md *:py-2
            *:transition-all
            *:duration-300 
            *:ease-in-out
            md:flex-row
            md:justify-center
            md:gap-x-8
            md:*:text-2xl
            md:*:w-[16rem]
          *:hover:bg-neutral-800
          *:hover:text-blue-600
          *:hover:border-white
            md:*:rounded-full
            md:*:overflow-hidden
            md:mb-[4rem]
            ">
          <NavLink className="bg-blue-600 border-1 border-black active:text-red-600 active-scale-110   text-neutral-100 backdrop-contrast-125" to={`/préinscription`}>
            <button>Rejoignez-nous <Arrow /> </button>
          </NavLink>
          <NavLink to={"/formations_diplomantes"} className="outline-1 active:scale-110 active:invert-50">
            <button>Voir nos formations  <MdTurnLeft /></button>
          </NavLink>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Activites 
