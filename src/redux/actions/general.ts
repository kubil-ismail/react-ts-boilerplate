export const handlePage = (request: any) => {
  return {
    type: "SET_PAGE",
    payload: request,
  };
};
