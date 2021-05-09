// util for post api request
const postAPI = async (url: string, payload: {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error('Network was not ok!');
    }
    return await response.json();
  } catch (error) {
    // based on the requirement to handle error
    console.log(error);
  }
};

export default postAPI;
