import fetchCommentProjects from "../../hooks/CommentProjects";


const CommentProjectsList = () => {
    const {data} = fetchCommentProjects();
 
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Comment Projects</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((h) => (
                    <tr key={h.id}>
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