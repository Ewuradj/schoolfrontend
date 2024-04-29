import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import StarRating from '../../components/StarRating/starRating'

const ReviewformPage = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <div className="max-w-7xl mx-auto p-16  bg-blue-50 overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-2 bg-white p-4 shadow rounded">
      
      <h3 className="text-xl mb-4">
        Write your review, add your username and submit
      </h3> <br/><br/>
      <form>
        <input
          type="text"
          placeholder="Enter the name of a school"
          className="border p-2 w-full mb-4"
        />
        <div className="flex items-center mb-4">
          <label className="mr-2">Your rating:</label>
          <div className="text-yellow-400"><StarRating/></div>
        </div>
        <textarea
          placeholder="What do you think of this school? Please follow the review guidelines"
          className="border p-2 w-full mb-4"
          rows={4}
          defaultValue={""}
        />
        <input
          type="text"
          placeholder="Title of your review"
          className="border p-2 w-full mb-4"
        />
        <input
          type="username"
          placeholder="Enter your username"
          className="border p-2 w-full mb-4"
        />
        <div className="flex items-center mb-4">
          <input type="checkbox" id="newsletter" className="mr-2" />
          <label htmlFor="newsletter">
            Receive updates and School Guide's ® newsletter
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="guideline" className="mr-2" />
          <label htmlFor="guideline">I have read the review guideline</label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          Submit review
        </button>
      </form>
      <p className="text-xs mt-4">
  We respect your privacy and never share your email address with the reviewed school or any third parties.
  Please see our <a href="/terms" className="text-blue-500 hover:underline">T&amp;Cs</a> and
   <a href="/privacy" className="text-blue-500 hover:underline">  Policy</a>
   for details of how we treat registered emails with TLC.
</p>
    </div>
    <div className="bg-blue-300 p-4 shadow rounded">
      <h3 className="font-semibold mb-2">Review guidelines</h3>
      <ul className="text-sm list-disc pl-5 space-y-1">
        <li>
          Do explain who you are and your relationship to the school e.g. "I am
          a parent..."
        </li>
        <li>
          Do back up your opinion with examples or clear reasons but, remember,
          it's your opinion not fact.
        </li>
        <li>Don't use bad or aggressive language.</li>
        <li>
          Don't go into detail about specific staff or pupils. Individual
          complaints should be directed to the school.
        </li>
        <li>
          Do go to the relevant authority if you have concerns about a serious
          issue such as bullying, drug abuse or bad management.
        </li>
       
      </ul>
    </div>
  </div>
</div>

      </div>
    </div>
  )
}

export default ReviewformPage