import { useNavigate } from "react-router-dom";
import ApiStatus from "../../ApiStatus";
import fetchCompanies from "../../hooks/CompanyHooks";


const CompanyList = () => {
    const nav = useNavigate();

    const { data, status, isSuccess } = fetchCompanies();
    
    if (!isSuccess) {
        return <ApiStatus status={status}></ApiStatus>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((h) => (
                    <tr key={h.id} onClick={() => nav(`/Company/${h.id}`)}>
                        <td>{h.id}</td>
                        <td>{h.orgName}</td>
                        <td>{h.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CompanyList;