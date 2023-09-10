import  './Title.css';
export default function Title(){
  const internalCss={
      color:'blue',
    fontSize:'20px',
  }
    return (
     <div>
            <div className="card-body">
                    <h2 className="card-title extaternal-css">Shoes!</h2>
                    {/* inline style  */}
                    {/* <p style={{color:'violet',fontSize:'20px'}}>If a dog chews shoes whose shoes does he choose?</p> */}
                     {/* internal css  */}
                    <p style={internalCss}>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> 
        </div>
    );
}