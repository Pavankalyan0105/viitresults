import React from 'react'

export default function Semesters({results , year}) {
    return (
        <div>
            {
                results[year].map( (item , idx ) => (
                <button type="button" class="btn btn-warning btn-bg btn-batch"> <a href={item} target="_blank  ">SEMESTER {idx+1}</a></button>
                ))
            }

        </div>
    )
}
