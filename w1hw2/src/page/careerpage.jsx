import { AddBadges, Badges } from "../components/careers";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export function CareerPage() {  
    
    const [getBadges, setBadges] = React.useState([
        {
            jobTitle: 'Janitor',
            level: 'Experienced',
            department: 'Engineering',
            summary: 'Some summary here about the job',
            key: uuid()
        },
        {
            jobTitle: 'Memer',
            level: 'Experienced',
            department: 'CS',
            summary: 'Some summary here about the job',
            key: uuid()
        },
        {
            jobTitle: 'Slack CHatter',
            level: 'Experienced',
            department: 'Slacker',
            summary: 'Some summary here about the job',
            key: uuid()
        }

    ])

    const addBadges = (jobs) => {
        // console.log(jobs)
        const newBadges = [...getBadges, {
            jobTitle: jobs.jobTitle,
            level: jobs.level,
            department: jobs.department,
            summary: jobs.summary,
            key:uuid()
        }]
        setBadges(newBadges);
        // console.log(getBadges)

    }

    const removeBadge = (id) => {
        const badges = getBadges.slice();
        
        const newBadges = badges.filter((jobs) => {
            return(jobs.key !== id)
        })

        setBadges(newBadges);
    }
        return (

            <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
                <div className="mb-8">
                    <div>
                        <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="md:w-1/2">
                        < AddBadges 
                            clickAddBadge = {(jobs)=>(addBadges(jobs))}/>
                    </div>

                    <ul className="md:flex-1 space-y-3" id="career-list">
                        {
                            getBadges.map( (job) => (
                                <Badges 
                                    job = {job}
                                    clickRemoveBadge = {(id) => (removeBadge(id)) }
                                    key = {job.key}/>
                            ))

                        }
                        
                    </ul>
                </div>
            </div>
        )
    // }
}

