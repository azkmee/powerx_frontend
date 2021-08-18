import * as react from 'react'

export const Badges = (props) => {

    const deleteBadge = () => {
      props.clickRemoveBadge(props.job.key);
    }

    return(
      <li className="js-career-item">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="text-sm leading-5 font-medium text-pink-600 truncate">
                            {props.job.jobTitle}
                            <span className="ml-1 font-normal text-gray-500">
                                {'in ' + props.job.department}
                            </span>
                        </div>
                        <div className="mt-2 flex">
                            <div className="flex items-center text-sm leading-5 text-gray-500 gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400">
                                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                                        </path>
                                </svg>
                                <span>
                                    {'Level: ' + props.job.level}
                                </span>
                                { props.job.level === 'Internship' ? 
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Student-friendly</span> 
                                  : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-5 flex-shrink-0 inline-flex items-center justify-center gap-2">
                    <button type="button" onClick = {() => {deleteBadge()}}
                      className="js-delete-btn p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out" title="Delete">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      </li>
    )
}



export const Button = (props) => {
    return(
    <button type="button" onClick={props.onClick}
            className=
            {props.isPlus ?   'right-0 absolute inset-y-0 px-1.5 text-gray-400': 
                                'left-0 absolute inset-y-0 px-1.5 text-gray-400'}
            id="headcount-minus-btn">
            
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {props.isPlus ?
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
            }
            
            </svg>
    </button>
    )
    
}

export const Headcount = () => {
    const [getHeadcount, setHeadcount] = react.useState(1);

    function plusHeadcount(){
        //get state and update state
        const currState = getHeadcount;
        if (currState == 0){
            const err = document.getElementById('headcount-error')
            err.classList.add('hidden')
        }
        setHeadcount(currState + 1)
    }

    function minusHeadcount(){
        //get state and update state
        const currState = getHeadcount;

        if (currState > 1) {
            setHeadcount(currState - 1)
        }

        else if (currState === 1) {
            const err = document.getElementById('headcount-error')
            err.classList.remove('hidden')
            setHeadcount(currState - 1)
        }
    }

    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
        <label htmlFor="headcount" className="
            block text-sm
            font-medium text-gray-700 sm:mt-px sm:pt-2
          ">
          Headcount
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="relative w-32">
            < Button 
                isPlus = {false}
                onClick = {minusHeadcount}/>
            <input type="text" name="headcount" id="headcount" required="" className="
                block
                w-full
                px-9
                text-center
                shadow-sm
                sm:text-sm
                focus:ring-pink-500 focus:border-pink-500
                border-gray-300
                rounded-md
              " value={getHeadcount} 
                onChange={(e) => setHeadcount(e.target.value)}
                readOnly=""/>
            < Button 
                isPlus = {true}
                onClick = {plusHeadcount}/>

          </div>

          <div id="headcount-error" className="text-red-500 text-xs pt-1 hidden">
                Headcount must be at least 1
          </div>

        </div>
      </div>
    )
}

const AddButton = (props) => {
  return (
    <button className="
    inline-flex
    justify-center
    py-2
    px-4
    border border-transparent
    shadow-sm
    text-sm
    font-medium
    rounded-md
    text-white
    bg-pink-600
    hover:bg-pink-700
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-pink-500
    "
    // onClick = {(props) => (props.clickAdd)}
    >
    ADD
  </button>
  )

}



export const AddBadges = (props) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.clickAddBadge)
    console.log(e.target)

    const jobTitle = e.target.querySelector('#job-title').value
    const level = e.target.querySelector('#job-level').value
    const department = e.target.querySelector('#job-department').value
    const summary = e.target.querySelector('#job-summary').value
    const headcount = e.target.querySelector('#headcount').value

    const job = {
      jobTitle, 
      level,
      department,
      summary,
      headcount,
  
    }
    props.clickAddBadge(job)

  }
    return (
        <div className="md:w-1/2">
            <form id="career-form" onSubmit = {handleSubmit}>
              <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 ">
                <div className="px-4 py-5 sm:px-6 text-lg">
                    Add Job Posting
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-5">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-title" className=" block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 ">
                        Job Title
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="job-title" id="job-title" required="" className="
                            block w-full shadow-sm sm:text-sm focus:ring-pink-500 
                            focus:border-pink-500 border-gray-300 rounded-md "/>
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-level" className="
                          block text-sm font-medium
                          text-gray-700 sm:mt-px sm:pt-2
                        ">
                        Level
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <select id="job-level" name="job-level" required="" className="
                            block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none 
                            focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md
                          ">
                          <option value="Internship">Internship</option>
                          <option value="Entry">Entry</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Manager">Manager</option>
                        </select>
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-department" className="
                          block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2
                        ">
                        Department
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <input type="text" name="job-department" id="job-department" required="" 
                            placeholder="e.g. Engineering" className="
                            block w-full shadow-sm sm:text-sm 
                            focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md
                          "/>
                      </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
                      <label htmlFor="job-summary" className="
                          block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2
                        ">
                        Summary
                      </label>
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea id="job-summary" name="job-summary" rows="4" required="" className="
                            block w-full shadow-sm sm:text-sm
                            focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md
                          " spellCheck="false"></textarea>
                      </div>
                    </div>
                    <Headcount />
                  </div>
                </div>

                <div className="px-4 py-4 sm:px-6 text-right">
                  < AddButton />
                </div>
              </div>
            </form>
          </div>
    )
}

