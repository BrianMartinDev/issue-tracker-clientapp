
import { useState } from 'react';
import logo from '../../logo.svg'; 
import { Issue } from '../../types/Issue';

type Args = {
    issue: Issue;
    submitted: (issue: Issue) => void;
}

const IssueForm = ({ issue, submitted }: Args) => {
    const [issueState, setIssueState] = useState({ ...issue });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> =
        async (event) => {
            event.preventDefault(); // prevents default browser submit action
            submitted(issueState);
        }
    return (
        <form className="row g-3" >
            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Issue Name" value={issue.name}
                    onChange={(e) => setIssueState({ ...issue, name: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Details</label>
                <input type="text" className="form-control" placeholder="Description" value={issue.description}
                    onChange={(e) => setIssueState({ ...issue, description: e.target.value })} />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary" disabled={!issueState.name || !issueState.description} onSubmit={onSubmit}>Submit</button>
            </div>
        </form >
    );
}

export default IssueForm;