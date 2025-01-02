import React from 'react'
import Popup from './popup'
function Courses() {
  return (
    <section className="py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
      Our <span className="text-green-700">Courses</span>
    </h2>
    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="51c362d43652868e762aa92a592262ce.jpeg"

          alt="Course 1"
          className="w-full h-45 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">
          Data Analysis, Data Management, Data Mining, Data Model, Data Visualization,
           Extract, Transform, Load, Microsoft Excel, Power BI, SQL
           <br></br>
          <br></br>
          Beginner Professional Certificate 3-6 Months
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="51c362d43652868e762aa92a592262ce.jpeg"
          alt="Course 2"
          className="w-full h-49 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">
          Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, Extract, 
          Transform, Load, Microsoft Excel, Power BI, SQL
          <br></br>
          <br></br>
          Beginner Professional Certificate 3-6 Months
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src="51c362d43652868e762aa92a592262ce.jpeg"
          alt="Course 3"
          className="w-full h-49 object-cover "
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-700">
          Data Analysis, Data Management, Data Mining, Data Model, Data Visualization, 
          Extract, Transform, Load, Microsoft Excel, Power BI, SQL
          <br></br>
          <br></br>
          Beginner Professional Certificate 3-6 Months
          </p>
        </div>
      </div>

    </div>
  </div>
  <Popup/>
</section>
// register



  )
}

export default Courses