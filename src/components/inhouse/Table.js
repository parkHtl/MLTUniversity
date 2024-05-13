import React from "react";

export default function Table() {
  return (
    <>
    <h1 className=" text-center text-2xl font-bold mt-5 mb-5 underline"> DURATION & COURSE SCHEDULE</h1>
    <div className="overflow-x-auto">
      <div className="w-full max-w-screen-md mx-auto">
        <table className="table-fixed w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/3 px-3 sm:px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-600">
                DURATION
              </th>
              <th className="w-2/3 px-3 sm:px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-bold text-gray-600">
                COURSE SCHEDULE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300 font-semibold">
                First year <br /> 1st semester
              </td>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300">
                <h1>You may choose Working or Non-working batches.</h1>
                <p>
                  <b> Full Time (Non-Working batch) </b>9am to 4pm on Monday to
                  Friday
                </p>
                <p>
                  <b>Part Time (Working batch)</b> 9am to 6pm on Saturday,
                  Sunday & Public holidays.
                </p>
                <p>
                  You may download our lectures within 30 days from the
                  delivery.
                </p>
              </td>
            </tr>
            <tr>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300 font-semibold">
                First year <br /> 2nd & 3rd semesters
              </td>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300">
                Curricular practical training (CPT) Revision / Assignment /
                project work discussion twice a month Sundays
              </td>
            </tr>
            <tr>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300 font-semibold">
                Second year <br /> 1st, 2nd and 3rd semesters
              </td>
              <td className="w-full sm:w-1/2 px-3 sm:px-6 py-4 border-b border-gray-300">
                Curricular practical training (CPT) Revision / Assignment /
                project work discussion twice a month Sundays
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
