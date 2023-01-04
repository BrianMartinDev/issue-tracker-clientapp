import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { CommentIssues } from "../types/CommentIssues";

const useFetchCommentIssues = () => {
    return useQuery<CommentIssues[], AxiosError>("CommentIssue", () =>
    axios.get(`${config.baseApiUrl}/api/CommentIssue`).then(
        (resp) => resp.data)
); 
}

export default useFetchCommentIssues; 