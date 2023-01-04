import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { CommentProject } from "../types/CommentProject";
 
const useFetchComentProjects = () => {

    return useQuery<CommentProject[], AxiosError>("CommentProject", () =>
        axios.get(`${config.baseApiUrl}/api/CommentProject`).then(
            (resp) => resp.data)
    );
}

export default useFetchComentProjects; 