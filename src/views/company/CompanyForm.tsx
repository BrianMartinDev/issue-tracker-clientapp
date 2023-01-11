import { useState } from "react";
import { useParams } from "react-router-dom";
import ApiStatus from "../../ApiStatus";
import { useFetchCompany } from "../../hooks/CompanyHooks";
import logo from '../../logo.svg';
import { Company } from "../../types/Company";

type Args = {
    company: Company;
    submitted: (company: Company) => void;
}



const CompanyForm = ({ company, submitted }: Args) => {
    const [companyState, setCompanyState] = useState({ ...company });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> =
        async (event) => {
            event.preventDefault(); // prevents default browser submit action
            submitted(companyState);
        }
    return (
        <form className="row g-3" >
            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Company Name" value={company.orgName}
                    onChange={(e) => setCompanyState({ ...company, orgName: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Details</label>
                <input type="text" className="form-control" placeholder="Details" value={company.description}
                    onChange={(e) => setCompanyState({ ...company, description: e.target.value })} />
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary" disabled={!companyState.orgName || !companyState.description} onSubmit={onSubmit}>Submit</button>
            </div>
        </form >
    );
}

export default CompanyForm;