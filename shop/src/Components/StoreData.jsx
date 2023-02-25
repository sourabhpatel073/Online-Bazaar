const StoreData = (val) => {
    let url = `https://63cd283efba6420d4d698593.mockapi.io/Products?search=${val}&page=${page}&limit=8`;
    // `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`
    axios.get(url).then((res) => {
      setGData(res.data);
    });
  };

  