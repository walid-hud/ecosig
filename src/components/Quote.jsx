const Quote = () => {
    return (
        <div className="px-4 ">
                <h1 className="text-3xl font-medium">Mot du directeur</h1>
                <hr className="text-transparent mt-1 mb-4 bg-blue-500 h-1 rounded-2xl " />
                <img src="./director.jpg" alt="" className="rounded-2xl" />
                <p className="text-sm text-gray-500 capitalize">M. moustahfid abderrahmane</p>
                <h1 className="text-2xl my-1 px-1 border-l-4 rounded-sm border-red-500">Une Ecole en Evolution Permanente</h1>
                <p style={{ fontFamily: "var(--font-serif)" }} className="text-lg text-neutral-950 text_reveal italic ">
                    "... Aujourd'hui plus que jamais les organismes économiques se sont rendus compte de l'intérêt du potentiel humain comme facteur essentiel de production. Etant ainsi, le jeune lauréat n'a qu'un seul choix, c'est faire démonstration de ses compétences tant sur le plan technique que moral. Etant conscient de nos responsabilités envers les lauréats que nous formons, nous travaillons en parfaite connaissance des besoins exprimés par le marché de l'emploi..."
                </p>
        </div>
    )
}

export default Quote
