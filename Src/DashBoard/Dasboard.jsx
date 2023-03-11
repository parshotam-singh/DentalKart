import React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Student from './StudentTable'

function App(){

    return (
        <>
        <div className='d-flex flex-column align-items-center'>
            {/* <h2>Students</h2> */}
        </div>
        <Student/>
        </>
    )
}
export default App;