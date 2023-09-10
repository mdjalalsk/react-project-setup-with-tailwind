// import Image from './Image';
// import Title from './Title';

export default function Cart(props) {
  console.log(props)
    return (
        <>


            <div className="card bg-base-100 shadow-xl">
                {/* <Image></Image>
                <Title></Title> */}
                 <div>
              <figure><img src="https://i.ibb.co/NTncwqH/luahg-at-pain.jpg" alt="Shoes" /></figure>
              </div>
             <div className="card-body">
                    <h2 className="card-title extaternal-css">{props.title}</h2>
                 <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> 
            </div>


        </>
    )
}