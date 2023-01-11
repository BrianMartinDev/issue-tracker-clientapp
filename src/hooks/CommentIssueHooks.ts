import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { CommentIssue } from "../types/CommentIssue";

const useFetchCommentIssues = () => {
    return useQuery<CommentIssue[], AxiosError>("CommentIssue", () =>
        axios.get(`${config.baseApiUrl}/api/CommentIssue`).then(
            (resp) => resp.data)
    );
}

const useFetchCommentIssue = (id: number) => {
    return useQuery<CommentIssue, AxiosError>(["CommentIssue", id], () =>
        axios.get(`${config.baseApiUrl}/api/CommentIssue/${id}`).then(
            (resp) => resp.data)
    );
}

const useAddCommentIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentIssue>(
        (commentIssue) => axios.post(`${config.baseApiUrl}/api/CommentIssue`, commentIssue),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("CommentIssue");
                nav(`/CommentIssueList`);
            }
        },
    );
}

const useUpdateCommentIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentIssue>(
        (commentIssues) => axios.post(`${config.baseApiUrl}/api/CommentIssue`, commentIssues),
        {
            onSuccess: (_, commentIssue) => {
                queryClient.invalidateQueries("CommentIssue");
                nav(`/CommentIssue/${commentIssue.id}`);
            }
        },
    );
}


const useDeleteCommentIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentIssue>(
        (commentIssue) => axios.post(`${config.baseApiUrl}/api/CommentIssue/${commentIssue.id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("CommentIssue");
                nav(`/CommentIssueList`);
            }
        },
    );
}

export default useFetchCommentIssues;
export { useFetchCommentIssue, useAddCommentIssue, useUpdateCommentIssue, useDeleteCommentIssue }