import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { Issue } from "../types/Issue";

const useFetchIssues = () => {
    return useQuery<Issue[], AxiosError>("Issues", () =>
        axios.get(`${config.baseApiUrl}/api/Issue`).then(
            (resp) => resp.data)
    );
}

const useFetchIssue = (id: number) => {
    return useQuery<Issue, AxiosError>(["Issue", id], () =>
        axios.get(`${config.baseApiUrl}/api/Issue/${id}`).then(
            (resp) => resp.data)
    );
}
const useAddIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Issue>(
        (issue) => axios.post(`${config.baseApiUrl}/api/Issue`, issue),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Issue");
                nav(`/IssueList`);
            }
        },
    );
}

const useUpdateIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Issue>(
        (issue) => axios.post(`${config.baseApiUrl}/api/Issue`, issue),
        {
            onSuccess: (_, issueId) => {
                queryClient.invalidateQueries("Issue");
                nav(`/IssueList/${issueId.id}`);
            }
        },
    );
}


const useDeleteIssue = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Issue>(
        (issue) => axios.post(`${config.baseApiUrl}/api/Issue/${issue.id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Issue");
                nav(`/IssueList`);
            }
        },
    );
}


export default useFetchIssues;
export { useFetchIssue, useAddIssue, useUpdateIssue, }