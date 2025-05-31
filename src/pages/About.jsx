import BreadCrumb from '@/components/BreadCrumb'
import Quote from '@/components/Quote';
import { ScrollToTop } from '@/components/utils';
import ImageLoader from '@/components/utils/Imgloader';
import { lazy, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const Footer = lazy(() => import('@/components/Footer'))

const BreadCrumblinks = [
  { path: "/", label: "accuil" },
  { path: "/", label: "À propos" },
];

const Objectifs = () => {
  return (
    <>
      <h1 className='text-2xl my-4  hr-text font-semibold md:text-4xl'>
        Objéctifs pédagogiques
      </h1>
      <div className='lg:grid grid-cols-3 gap-x-[2rem] gap-y-[1rem] lg:mb-12 
      
     
      ' id='objectives'>
        <div
          id='card'
          className=' hover:scale-[1.025] hover:bg-neutral-300 hover:border-2 hover:border-blue-600 transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
        >
          <img src="https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='aspect-video object-cover brightness-[70%] ' />
          <p className=' text-xl px-2 py-2 text-shadow-md'>
            Former des cadres capables de créer et de gèrer des entreprises prospères.
          </p>
        </div>
        <div
          id='card'
          className=' hover:scale-[1.025] hover:bg-neutral-300 hover:border-2 hover:border-blue-600 transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
        >
          <img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='aspect-video object-cover brightness-[70%] ' />
          <p className=' text-xl px-2 py-2 text-shadow-md'>
            Former des techniciens spécialisés capables de concevoir, créer et administrer des applications informatiques à caractère de gestion.
          </p>
        </div>
        <div
          id='card'
          className=' hover:scale-[1.025] hover:bg-neutral-300 hover:border-2 hover:border-blue-600 transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
        >
          <img src="https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='aspect-video object-cover brightness-[70%] ' />
          <p className=' text-xl px-2 py-2 text-shadow-md'>
            Former des techniciens spécialisés capables de maintenir et de gérer un parc informatique.
          </p>
        </div>
        <div
          id='card'
          className='md:hidden  hover:scale-[1.025] transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
        >
          <img src="https://images.pexels.com/photos/6803527/pexels-photo-6803527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='aspect-video object-cover brightness-[70%] ' />
          <p className=' text-xl px-2 py-2 text-shadow-md'>
            Former des techniciens spécialisés capables d’assister le responsable d’un département de gestion (finance, juridique, marketing, production…).
          </p>
        </div>
        <div
          id='card'
          className='md:hidden  hover:scale-[1.025] transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
        >
          <img src="https://images.pexels.com/photos/4872028/pexels-photo-4872028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='aspect-video object-cover brightness-[70%] ' />
          <p className=' text-xl px-2 py-2 text-shadow-md'>
            Participer à la formation continue et à l’amélioration des compétences des salariés en activité professionnelle.
          </p>
        </div>

        <div className=' hidden md:flex col-span-3  *:w-1/3 justify-center gap-x-[2rem] hover:scale-100 transition-none hover:border-none  '>
          <div
            id='card'
            className='hover:scale-[1.025] hover:bg-neutral-300 hover:border-2 hover:border-blue-600 transition-all duration-300 ease-in-out my-2 flex flex-col border-2 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
          >
            <img src="https://images.pexels.com/photos/6803527/pexels-photo-6803527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='aspect-video object-cover brightness-[70%] ' />
            <p className=' text-xl px-2 py-2 text-shadow-md'>
              Former des techniciens spécialisés capables d’assister le responsable d’un département de gestion (finance, juridique, marketing, production…).
            </p>
          </div>
          <div
            id='card'
            className=' hover:scale-[1.025] hover:bg-neutral-300 hover:border-2 hover:border-blue-600 transition-all duration-300 ease-in-out my-2 flex flex-col border-1 border-neutral-800 rounded-lg h-[22rem] overflow-hidden backdrop-blur-lg lg:h-[24rem]'
          >
            <img src="https://images.pexels.com/photos/4872028/pexels-photo-4872028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='aspect-video object-cover brightness-[70%] ' />
            <p className=' text-xl px-2 py-2 text-shadow-md'>
              Participer à la formation continue et à l’amélioration des compétences des salariés en activité professionnelle.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const goalsData = [
  { text: "Former des cadres capables de créer et de gèrer des entreprises prospères.", imgUrl: "https://plus.unsplash.com/premium_photo-1661301084402-1a0452b5850e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  { text: "Former des techniciens spécialisés capables de concevoir, créer et administrer des applications informatiques à caractère de gestion.", imgUrl: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

  { text: "Former des techniciens spécialisés capables de maintenir et de gérer un parc informatique.", imgUrl: "https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

  { text: "Former des techniciens spécialisés capables d’assister le responsable d’un département de gestion (finance, juridique, marketing, production…).", imgUrl: "https://images.pexels.com/photos/6803527/pexels-photo-6803527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },

  { text: "Participer à la formation continue et à l’amélioration des compétences des salariés en activité professionnelle.", imgUrl: "https://images.pexels.com/photos/4872028/pexels-photo-4872028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" }


]




const About = () => {
  const location = useLocation()
  ScrollToTop()
  return (
    <section
      className="mt-[4rem]">
      {location.pathname === "/about" && <BreadCrumb links={BreadCrumblinks} />}
      <section className='mt-2 px-4 h-fit'>
        <h1 className="text-5xl border-l-6 py-2 border-blue-600 font-medium rounded-md px-2 mb-4 my-8">Esprit ECOSIG</h1>
        <h1 className='text-3xl my-4  hr-text font-semibold md:text-4xl'>
          Raison d'être
        </h1>
        <div className='flex w-full'>
          <div className='lg:w-1/2'>
            <p className='lg:text_reveal-none text-lg lg:text-xl ' style={{ animationRangeStart: "cover calc(100vh - 14rem)  ", animationRangeEnd: 'contain calc(100vh)' }}>
              Aujourd’hui et plus que jamais, les ressources humaines joueront un rôle crucial dans la réussite et les prospérités des nations. Le Maroc en général et la région de Beni Mellal en particulier, et par l’ouverture du pays à la compétition économique mondiale, se trouvent dans la nécessité de former des hommes et des femmes capables non seulement de s’intégrer dans le tissus économique et social mais de créer et de gérer leurs propres entreprises.
              <br />
              <br />
              C’est dans cette perspective que se concrétise la raison d’être de l’institut ECOSIG, autorisée et accréditée par l’etat, ECOSIG s’est fixée comme mission suprême de participer activement au niveau de notre région à cet effort nationale de formation des ressources humaines. Après les techniciens, et les techniciens spécialisés, elle participe aujourd’hui à la formation des cadres capables de créer et de gérer des entreprises prospères, participant ainsi au développent de l’économie nationale en générale et régionale en particulier.
              <br />
              <br />
              Reconnue pour la pertinence de ses programmes, le sérieux et la compétence de son équipe pédagogique, ce n’est pas par hasard que beaucoup de ses lauréats se sont facilement intégrés dans différentes entreprises nationales prestigieuses (ONA, DOLIDOL, SGMB, ATIJARI WAFA ...).
              <br />
              <br />
              Conscients de leurs responsabilités nationales, les membres de l’équipe ECOSIG ne ménageront aucun effort afin de mettre à la disposition de ses stagiaires un environnement pédagogique des plus pertinents.
            </p>
          </div>
          <div className='w-0 h-0 lg:w-1/2 lg:h-full sticky top-[4rem] '>
            <ImageLoader imgSrc={"/team-spirit.svg"} />
          </div>
        </div>
        <Objectifs />

      </section>
      <Quote />
      {location.pathname == "/about" && <Footer />}
    </section>
  )
}

export { About as default, Objectifs }
