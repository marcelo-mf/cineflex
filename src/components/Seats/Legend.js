 export default function Legend() {
     return(
         <div className="legenda">
             <div className="container-legenda">
             <div className="assento disponivel"></div>
             <h1>Disponível</h1>
             </div>
             <div className="container-legenda">
             <div className="assento ocupado"></div>
             <h1>Ocupado</h1>
             </div>
             <div className="container-legenda">
             <div className="assento selecionado"></div>
             <h1>Selecionado</h1>
             </div>
         </div>
     )
 }