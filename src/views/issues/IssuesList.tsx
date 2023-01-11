import { useNavigate } from "react-router-dom";
import ApiStatus from "../../ApiStatus";
import fetchIssues from "../../hooks/IssueHooks";

const IssuesList = () => {
    const nav = useNavigate();

    const { data, status, isSuccess } = fetchIssues();

    if (!isSuccess) {
        return <ApiStatus status={status}></ApiStatus>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">OrgName</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((h) => (
                    <tr key={h.id} onClick={() => nav(`/Issue/${h.id}`)}>
                        <td>{h.id}</td>
                        <td>{h.name}</td>
                        <td>{h.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default IssuesList;