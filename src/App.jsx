import './App.css'

function App() {

  return (
    <div className='container mx-auto'>
    
    <h1 className="text-6xl font-bold pb-12">
      Beta lab Cripto
    </h1>
    <hr />
    <div  className="grid grid-cols-2 gap-4 my-16">
    
    <div>
<label htmlFor="message" className="block mb-2  text-3xl font-bold font-medium text-gray-900 dark:text-white">Encrypted Message</label>
<textarea id="message" rows="12" className="block p-2.5 w-full  text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the encrypted message..."></textarea>
</div>
 <div>  
<label  htmlFor="message" className="block mb-2  text-3xl font-bold font-medium text-gray-900 dark:text-white">Decrypted Message</label>
<textarea disabled={true} id="message" rows="12" className="block p-2.5 w-full  text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Decrypted message..."></textarea>
</div> 
 
</div>
<button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
text-2xl font-bold font-medium">Decrypt Message</button>
    </div>
  )
}

export default App
