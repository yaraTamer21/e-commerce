import React from 'react'
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Flag from '@material-ui/icons/Flag';

const Head = () => {
    return (
        <>
            <div className="parent-head">
                <div className='left'>
                    <ul>
                        <li>
                            <span className='  icons-head'><Phone /></span> <span>+856451651648461 </span>
                        </li>
                        <li>
                            <span  className='  icons-head'> <Email /></span> <span>Example@gmail.com </span>
                        </li>
                      
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>
                            Theme FAQ,S
                        </li>
                        <li>
                           NEED Helps
                        </li>
                        <li>
                              <Flag/><span>EN </span>
                        </li>
                        <li>
                             <span>USD </span>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Head