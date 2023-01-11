import { useState } from "react";
import { useParams } from "react-router-dom";
import ApiStatus from "../../ApiStatus";
import logo from '../../logo.svg';
import { CommentIssue } from "../../types/CommentIssue";

type Args = {
    commentIssue: CommentIssue;
    submitted: (commentIssue: CommentIssue) => void;
}



const CommentIssueForm = ({ commentIssue, submitted }: Args) => {
    const [commentIssueState, setCommentIssueState] = useState({ ...commentIssue });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> =
        async (event) => {
            event.preventDefault(); // prevents default browser submit action
            submitted(commentIssueState);
        }
    return (
        <form className="row g-3" >
            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Comment Name" value={commentIssue.name}
                    onChange={(e) => setCommentIssueState({ ...commentIssue, name: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Details</label>
                <input type="text" className="form-control" placeholder="Details" value={commentIssue.description}
                    onChange={(e) => setCommentIssueState({ ...commentIssue, description: e.target.value })} />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary" disabled={!commentIssue.name || !commentIssue.description} onSubmit={onSubmit}>Submit</button>
            </div>
        </form >
    );
}

export default CommentIssueForm;