// Error handling for data retrieval
try {
    const response = await axios.get(/* ... */);
    // ...
  } catch (error) {
    console.error('Error fetching blog data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
  // Error handling for other processes (e.g., data analysis and search)
  try {
    // ...
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  