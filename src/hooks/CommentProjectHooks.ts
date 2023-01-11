import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { CommentProject } from "../types/CommentProject";

const useFetchCommentProjects = () => {

    return useQuery<CommentProject[], AxiosError>("CommentProject", () =>
        axios.get(`${config.baseApiUrl}/api/CommentProject`).then(
            (resp) => resp.data)
    );
}

const useFetchCommentProject = (id: number) => {
    return useQuery<CommentProject, AxiosError>(["CommentProject", id], () =>
        axios.get(`${config.baseApiUrl}/api/CommentProject/${id}`).then(
            (resp) => resp.data)
    );
}

const useAddCommentProjects = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentProject>(
        (commentProjects) => axios.post(`${config.baseApiUrl}/api/CommentProject`, commentProjects),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("CommentProject");
                nav(`/CommentProjectList`);
            }
        },
    );
}

const useUpdateCommentProjects = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentProject>(
        (commentProjects) => axios.post(`${config.baseApiUrl}/api/CommentProject`, commentProjects),
        {
            onSuccess: (_, commentProjects) => {
                queryClient.invalidateQueries("CommentProject");
                nav(`/CommentProject/${commentProjects.id}`);
            }
        },
    );
}


const useDeleteCommentProjects = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, CommentProject>(
        (commentProjects) => axios.post(`${config.baseApiUrl}/api/commentProjects/${commentProjects.id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("CommentProjects");
                nav(`/CommentProjectsList`);
            }
        },
    );
}

export default useFetchCommentProjects;
export { useFetchCommentProject, useAddCommentProjects, useUpdateCommentProjects, useDeleteCommentProjects }