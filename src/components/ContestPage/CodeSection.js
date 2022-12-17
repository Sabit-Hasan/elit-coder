import { constraints, inputFormat, outputFormat, problemDetail, problemTitle, sampleInput, sampleOutput, task } from "../../data/ProblemData";

export default function CodeSection() {
    return (
        <>
            <div className="CodeSection">
                <div className="container">
                    <div className="timer">
                        <p>00:00:00:00</p>
                    </div>
                    <div className="row flex-wrap">
                        <div className="col-6">
                            <h3>Objective</h3>
                            <h4>{problemTitle}</h4>
                            <p>{problemDetail}</p>
                            <h4>Task</h4>
                            <p>{task}</p>
                            <h4>Input Format</h4>
                            <p>{inputFormat}</p>
                            <h4>Constraints</h4>
                            <p>{constraints}</p>
                            <h4>Output Format</h4>
                            <p>{outputFormat}</p>
                            <h4>Sample Input</h4>
                            <p>{sampleInput}</p>
                            <h4>Sample Output</h4>
                            <p>{sampleOutput}</p>
                        </div>
                        <div className="col-6">
                            <form action="">
                                <iframe src="https://trinket.io/embed/python/3d8d7ce66b" width="100%" height="550" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                                <div className="submit-button">
                                    <input type="button" value="Submit" className="btn btn-dark" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}