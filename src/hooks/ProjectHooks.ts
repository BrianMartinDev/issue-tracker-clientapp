import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { Project } from "../types/Project";

const useFetchProjects = () => {
    return useQuery<Project[], AxiosError>("Projects", () =>
        axios.get(`${config.baseApiUrl}/api/Project`).then(
            (resp) => resp.data)
    );
}

const useFetchProject = (id: number) => {
    return useQuery<Project, AxiosError>(["Projects", id], () =>
        axios.get(`${config.baseApiUrl}/api/Project/${id}`).then(
            (resp) => resp.data)
    );
}
const useAddProject = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Project>(
        (project) => axios.post(`${config.baseApiUrl}/api/Project`, project),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Project");
                nav(`/ProjectList`);
            }
        },
    );
}


const useUpdateProject = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Project>(
        (project) => axios.post(`${config.baseApiUrl}/api/Project`, project),
        {
            onSuccess: (_, projectId) => {
                queryClient.invalidateQueries("Project");
                nav(`/ProjectList/${projectId.id}`);
            }
        },
    );
}


const useDeleteProject = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Project>(
        (project) => axios.post(`${config.baseApiUrl}/api/Project/${project.id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Project");
                nav(`/ProjectList`);
            }
        },
    );
}


export default useFetchProjects; 
export { useFetchProject, useAddProject, useUpdateProject, useDeleteProject}
