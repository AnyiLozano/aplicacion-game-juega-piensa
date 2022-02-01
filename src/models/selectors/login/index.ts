import useCreateSelector from "../createSelector";

const useLoginSelectors = () => {
    // Constructor
    const { createSelector } = useCreateSelector();

    const loginSelector = createSelector(
        (state: any) => state.login,
        (login: any) => login
    );

    const level1Selector = createSelector(
        (state: any) => state.level1,
        (level1: any) => level1
    );

    const level2Selector = createSelector(
        (state: any) => state.level2,
        (level2: any) => level2
    );

    const level3Selector = createSelector(
        (state: any) => state.level3,
        (level3: any) => level3
    );

    return {
        loginSelector,
        level1Selector,
        level2Selector,
        level3Selector
    }
}

export default useLoginSelectors;