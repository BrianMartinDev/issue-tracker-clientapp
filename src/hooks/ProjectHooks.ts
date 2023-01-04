import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { Project } from "../types/Project";

const useFetchProjects = () => {
    return useQuery<Project[], AxiosError>("Projects", () =>
        axios.get(`${config.baseApiUrl}/api/Project`).then(
            (resp) => resp.data)
    );
}

export default useFetchProjects; 