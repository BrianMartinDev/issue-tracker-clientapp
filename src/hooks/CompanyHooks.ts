import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
import { Company } from "../types/Company";

const useFetchCompanies = () => {
    return useQuery<Company[], AxiosError>("Companies", () =>
        axios.get(`${config.baseApiUrl}/api/Company`).then(
            (resp) => resp.data)
    );
}

export default useFetchCompanies; 