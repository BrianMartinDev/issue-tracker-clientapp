import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { Issues } from "../types/Issues";

const useFetchIssues = () => {
    return useQuery<Issues[], AxiosError>("Issues", () =>
    axios.get(`${config.baseApiUrl}/api/Issue`).then(
        (resp) => resp.data)
);
}

export default useFetchIssues; 