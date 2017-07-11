/**
 * Created by joelacedo on 25/06/2017.
 */
export const selectedLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};