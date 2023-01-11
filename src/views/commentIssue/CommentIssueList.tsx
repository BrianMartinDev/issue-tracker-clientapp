import { useNavigate } from 'react-router-dom';
import ApiStatus from '../../ApiStatus';
import fetchCommentIssues from '../../hooks/CommentIssueHooks';

const CommentIssuesList = () => {
    const nav = useNavigate();

    const { data, status, isSuccess } = fetchCommentIssues();
    if (!isSuccess) {
        return <ApiStatus status={status}></ApiStatus>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Comment Issue</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((h) => (
                    <tr key={h.id} onClick={() => nav(`/CommentIssue/${h.id}`)}>
                        <td>{h.id}</td>
                        <td>{h.name}</td>
                        <td>{h.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CommentIssuesList; 