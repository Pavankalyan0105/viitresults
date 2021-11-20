import React,{ useState } from 'react'

function Home({setYear , year}) {
    return (
        <div>
            <div className="App">
            <div className="batch-buttons">
                <button type="button" class="btn btn-primary btn-bg btn-batch"
                    onClick = { () => setYear('2025')}
                > 2021-2025</button>
                <button type="button" class="btn btn-primary btn-bg btn-batch"
                    onClick = { () => setYear('2024')}
                > 2020-2024</button>
                <button type="button" class="btn btn-primary btn-bg btn-batch"
                    onClick = { () => setYear('2023')}
                > 2019-2023</button>
                <button type="button" class="btn btn-primary btn-bg btn-batch"
                    onClick = { () => setYear('2022')}
                > 2018-2022</button>
            </div>
            {
                console.log(year)
            }
            </div>
        </div>
    )
}

export default Home;