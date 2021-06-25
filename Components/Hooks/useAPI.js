export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setData(response.data);
  };

  return { data, error, loading, request };
};
