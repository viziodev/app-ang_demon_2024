export interface RestReponse<T> {
    totalItems: number,
    totalPages: number,
    currentPage: number,
    results: T 
}
