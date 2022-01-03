import useCreateSelector from "../createSelector";

const useLoginSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    const loginSelector = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    return {
        loginSelector,
    }
}

export default useLoginSelectors;