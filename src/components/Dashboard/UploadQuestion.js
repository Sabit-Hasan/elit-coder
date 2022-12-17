import Sidebar from './Sidebar';
import './UploadQuestion.css';

export default function UploadQuestion() {
    return (
        <>
            <div className="upload-question">
                <div className="container">
                    <div className="inner-question">
                        <div className="side-nav">
                            <Sidebar />
                        </div>
                        <div className="upload-section">
                            <h3 align="center" style={{margin:'30px 0px'}}>Upload Question</h3>
                            <form action="" className='upload-form'>
                                <div className="upload-left">
                                    <div>
                                        <input type="text" name="title" id="title" placeholder='Title' required />
                                    </div>
                                    <div>
                                        <textarea name="details" id="details" cols="25" rows="10" placeholder='Details'></textarea>
                                    </div>
                                    <div>
                                        <input type="number" name="timer" id="timer" placeholder='Timer' required />
                                    </div>
                                    <input type="submit" value="Submit" className='btn btn-dark' style={{marginTop:'10px'}} />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}