import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import config from "../config";
import { Company } from "../types/Company";

const useFetchCompanies = () => {
    return useQuery<Company[], AxiosError>("Companies", () =>
        axios.get(`${config.baseApiUrl}/api/Company`).then(
            (resp) => resp.data)
    );
}

const useFetchCompany = (id: number) => {
    return useQuery<Company, AxiosError>(["Companies", id], () =>
        axios.get(`${config.baseApiUrl}/api/Company/${id}`).then(
            (resp) => resp.data)
    );
}

const useAddCompany = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Company>(
        (company) => axios.post(`${config.baseApiUrl}/api/Company`, company),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Company");
                nav(`/CompanyList`);
            }
        },
    );
}

const useUpdateCompany = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Company>(
        (company) => axios.post(`${config.baseApiUrl}/api/Company`, company),
        {
            onSuccess: (_, companyId) => {
                queryClient.invalidateQueries("Company");
                nav(`/CompanyList/${companyId.id}`);
            }
        },
    );
}


const useDeleteCompany = () => {
    const nav = useNavigate();
    const queryClient = useQueryClient();

    return useMutation<AxiosResponse, AxiosError, Company>(
        (company) => axios.post(`${config.baseApiUrl}/api/Company/${company.id}`),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Company");
                nav(`/CompanyList`);
            }
        },
    );
}

export default useFetchCompanies;
export { useFetchCompany, useAddCompany, useUpdateCompany, useDeleteCompany };