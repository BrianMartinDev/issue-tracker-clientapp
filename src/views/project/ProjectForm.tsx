
import { useState } from 'react';
import logo from '../../logo.svg';
import { Project } from '../../types/Project';

type Args = {
    project: Project;
    submitted: (project: Project) => void;
}

const ProjectForm = ({ project, submitted }: Args) => {
    const [projectState, setProjectState] = useState({ ...project });

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> =
        async (event) => {
            event.preventDefault(); // prevents default browser submit action
            submitted(projectState);
        }
    return (
        <form className="row g-3" >
            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Project Name" value={project.name}
                    onChange={(e) => setProjectState({ ...project, name: e.target.value })} />
            </div>
            <div className="col-md-6">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" placeholder="Description" value={project.description}
                    onChange={(e) => setProjectState({ ...project, description: e.target.value })} />
            </div>


            <div className="col-12">
                <button type="submit" className="btn btn-primary" disabled={!projectState.name || !projectState.description} onSubmit={onSubmit}>Submit</button>
            </div>
        </form >
    );
}

export default ProjectForm;