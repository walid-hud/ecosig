import TypingEffect from "./utils/TextTyping"

const Quote = () => {
    return (
        <div className="px-4 relative">
            <h1 className="text-3xl my-4 font-semibold text-center md:text-4xl hr-text ">Mot du directeur</h1>
            <div id="quote-container" onMouseEnter={(e)=>console.log(e.target.getBoundingClientRect())} className="md:grid grid-cols-2 gap-x-8 md:bg-neutral-900 md:rounded-2xl md:text-neutral-50 md:p-4  md:relative">
                <img src="./director.jpg" id="directeur-img" alt="directeur" loading='lazy' className="rounded-lg col-span-1 row-span-4  " />
                <p className="text-sm md:hidden text-gray-500 capitalize ">M. moustahfid abderrahmane</p>
                <h1 className="text-3xl my-1 px-2 border-l-6 rounded-md font-medium border-blue-600 md:text-5xl md:border-l-6 ">Une Ecole en Evolution Permanente</h1>
                <div
                    style={{ fontFamily: "var(--font-serif)"}}
                    className="text-xl italic md:text-3xl  "
                >
                   <TypingEffect
                       text={`"... Aujourd'hui plus que jamais les organismes économiques se sont rendus compte de l'intérêt du potentiel humain comme facteur essentiel de production. Etant ainsi, le jeune lauréat n'a qu'un seul choix, c'est faire démonstration de ses compétences tant sur le plan technique que moral. Etant conscient de nos responsabilités envers les lauréats que nous formons, nous travaillons en parfaite connaissance des besoins exprimés par le marché de l'emploi..."`}
                       speed={30}
                   />
                </div>
                <p className="text-sm capitalize hidden md:block md:text-2xl text-stone-200 font-light  absolute bottom-4 right-4 tracking-wider">M. moustahfid abderrahmane</p>
            </div>
        </div>
    )
}

export default Quote
