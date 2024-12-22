import {
    useQuery,
} from '@tanstack/react-query';
import { Dessert, productBakery } from '../api-section/productApi';

export const useProductApi = () => {
    return useQuery({
        queryKey: ['bakery'],
        queryFn: () => productBakery(),
        placeholderData: (prev) => prev,
    })
}

export const useDessertApi = () => {
    return useQuery({
        queryKey: ['Dessert'],
        queryFn: () => Dessert(),
        placeholderData: (prev) => prev,
    })
}