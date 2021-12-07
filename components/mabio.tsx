import Image from 'next/image'

export default function Mabio() {
    const contains = [
        { nom: "Stéphanie Bainville", realisation: "danseuse, chorégraphe et metteur en scène..." },
        { nom: "Axel de Boserey", realisation: "Daniil Harms." },
        { nom: "Adel Akim", realisation: "Falk Richter." },
        { nom: "Guy Freix", realisation: "la comedia del arte." },
        { nom: "Patrice Thibault", realisation: "le jeu burlesque." },
        { nom: "Raphaël Glucksman", realisation: "" },
        { nom: "Jean-François Auguste", realisation: "La tragédie du Vengeur de C. Tourneur." },
        { nom: "Michel Serda", realisation: "Ma Solange comment t’écrire mon désastre, Alex Roux de N. Renaude." },
    ]
    return (
        <>
            <hr />
            <h3 className="text-center"><span className="material-icons">auto_stories</span> Ma biographie <span className="material-icons">auto_stories</span></h3>
            <hr />
            <style jsx>{`

                .background {
                    background-image: url("/img/olga-thelavart.png");
                }
                .signature {
                    font-family: 'Calligraffitti', cursive;
                    color: #dba400
                }
                .color {
                    color: #dba400
                }
                `}</style>
            <div className="background container">
                <div className="row">
                    <div className="col-3 bg-dark text-white">
                        <br />
                        <Image
                            src="/img/francois.png"
                            alt="/img/francois.png"
                            className="rounded-circle"
                            width="300"
                            height="300"
                        />
                        <br />
                 
                    </div>
                    <div className="col-9">
                        <br />

                        <p>théâtre </p>

                        <p className="signature text-end fs-1">François Leviste</p>
                        <br />
                    </div>
                </div>
            </div>
            <br />
            <br />

        </>)
}
