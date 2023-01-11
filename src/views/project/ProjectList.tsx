import { useNavigate } from 'react-router-dom';
import ApiStatus from '../../ApiStatus';
import fetchProjects from '../../hooks/ProjectHooks';

const ProjectList = () => {

    const nav = useNavigate();

    const { data, status, isSuccess } = fetchProjects();
    if (!isSuccess) {
        return <ApiStatus status={status}></ApiStatus>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((h) => (
                    <tr key={h.id} onClick={() => nav(`/Project/${h.id}`)}>
                        <td>{h.id}</td>
                        <td>{h.name}</td>
                        <td>{h.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProjectList; 