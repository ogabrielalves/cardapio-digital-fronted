import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

const postData = async (data: FoodData): AxiosPromise<unknown> => {
  const response = axios.post(API_URL + "/food", data);
  return response;
};

const deleteData = async (id: number) => {
  const response = axios.delete(API_URL + `/food/delete/${id}`);
  return (await response).data;
};

// METODO POST
export function useFoodDataMutate() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}

// METODO DELETE
export function useFoodDataDelete() {
  const queryClient = useQueryClient();

  const mutate = useMutation(deleteData, {
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(["food-data"]);
    },
  });

  return mutate;
}
