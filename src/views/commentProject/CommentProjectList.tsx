import { useNavigate } from 'react-router-dom';
import ApiStatus from '../../ApiStatus';
import fetchCommentProjects from '../../hooks/CommentProjectHooks';

const CommentProjectsList = () => {
    const nav = useNavigate();

    
    const { data, status, isSuccess } = fetchCommentProjects();

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
                    <tr key={h.id} onClick={() => nav(`/ComentProject/${h.id}`)}>
                        <td>{h.id}</td>
                        <td>{h.name}</td>
                        <td>{h.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CommentProjectsList; 