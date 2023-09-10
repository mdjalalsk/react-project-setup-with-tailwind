
import './App.css'
import Cart from './components/carts/cart'
import Title from './components/Carts/Title';

function App() {
 
  const people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 28 },
    { id: 3, name: 'Bob', age: 35 },
  ];
  return (
    <>
      <h1 className='m-5'>মেইন জিনিস হচ্ছে ছয়টা - JSX, component, porps, events, state, আর effect । সেগুলা দিয়েই কিন্তু সাইট হয়। সেগুলা দিয়েই সব হয়। সাথে দুই একটা সাইডের জিনিস আছে। তবে মেইন জিনিস কিন্তু ছয়টাই। </h1>

     <h1 className='text-center text-green-500 mt-5 text-3xl'>Install React project use tailwind with dasiyUi </h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 px-12">
     {
       people.map(person=> <Cart title={person.name} key={person.id}/>)
     }
     
     </div>
     <div className=' m-5'>
      <h1> Local leptop image in publick folder </h1>
      <img src="../public/img/L1.jpg" alt=""  />
      </div>
    </>
  )
}
 
// function Greating(){
//   return(
//     <>
//     <h1 className="text-center font-medium text-4xl text-red-500">Hello i am a Greating Component</h1>
//     </>
//   )
// }

export default App
