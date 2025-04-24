
import BreadCrumb from "./BreadCrumb"
import ImageSlider from './Slider'
import Footer from './Footer'

const Activites = () => {

  const BreadCrumblinks = [{ path: '/', label: 'accuil' }, { path: '/activites', label: 'activites' }]
  return (
    <main className="h-screen mt-[4rem]">
      <BreadCrumb links={BreadCrumblinks} />
      <section className="mt-2 px-4">
      <h1 className="text-4xl border-l-5 border-blue-600 rounded-sm px-2 mb-4">Activites</h1>
      <ImageSlider />
      <p className='text_reveal text-lg  ' style={{ animationRangeStart: "cover 14rem ", animationRangeEnd:'contain' }}>
        Nous entendons par activités parascolaires toutes les manifestations culturelles et sportives organisées par ECOSIG depuis sa création.

        Ces activités ne sont nullement facultatives vue qu'elles contribuent à l'épanouissement et à l'intégration de l'apprenant ainsi qu'au rayonnement culturel riche sur toute la ville.

        Le programme d'activité étalé porte sur les thèmes suivants: exposition, projection, soirée, représentation, conférence, journées d'information, remise de diplômes sports, sortie...

        L'objectif majeur de telles actions est d'ouvrir l'établissement sur son environnement et de collaborer avec le maximum de partenaires( chambres de commerce, presse régionale, délégation de l'artisanat, délégation des affaires culturelles, académie de l'éducation nationale, facultés( FLSH, FST); offices...

        ECOSIG tient avec son environnement des partenariats pour améliorer constamment son image de marque.

        La direction de ECOSIG informe son aimable public estudiantin actuel que l'école est un espace d'animation. Dans cet esprit, il y a eu création de deux ateliers pour l'année 1999-2000 : " Ecriture " et "théâtre ".

        A travers ces ateliers, les animateurs se fixent pour objectif:

        
      </p>
      <div className=" flex flex-col gap-y-2  rounded-md  outline-1 px-2 py-4 *:text-lg *:py-1 ">
                 
        <p  className='unit_text text-blue-600 bullets'> Découvrir des vocations nouvelle</p>
        <p  className='unit_text text-blue-600 bullets'> Découvrir les productions écrites de belles factures</p>
        <p  className='unit_text text-blue-600 bullets'> Mettre en scène ces productions</p>
        <p  className='unit_text text-blue-600 bullets'> Permettre aux apprenants, inscrits d'affiner et de confronter leurs pratiques rédactionnelles et leurs vocations artistiques</p>
        <p  className='unit_text text-blue-600 bullets'> Apprendre à travailler en équipe</p>
        <p  className='unit_text text-blue-600 bullets'> Publier la revue trimestrielle de l'étudiant "ecosig"</p>
        <p  className='unit_text text-blue-600 bullets'> Apprendre à travailler en réseau avec les ateliers "écriture" "théâtre" de la FST, FLSH</p>
        <p  className='unit_text text-blue-600 bullets'> Participer à des concours de la belle plume(nouvelle, pièce de théâtre, poème)</p>
        <p  className='unit_text text-blue-600 bullets'> Former Eventuellement de Futurs animateurs et enfin se préparer aux grands festivals</p>
      </div>
      
       <p className="mt-2 text-xl">
       Voilà les raisons du montage de cet atelier dans notre école, comme perpective d'avenir, l'école envisage de monter d'autres ateliers (club vidéo, club des internautes de ECOSIG, patrimoine).
       </p> 
      </section>
      <Footer/>
    </main>
    )
}

export default Activites
