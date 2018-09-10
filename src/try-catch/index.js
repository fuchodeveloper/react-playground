// --- mutiple try..catch blocks

const readData = () => {
  let json = '{"name": "Tesla"}';
  try {
    bla();
  } catch (error) {
    if (error.name !== 'SyntaxError') {
      throw error;
    }
  }
}

try {
  readData();
} catch (error) {
  console.log('External catch: ' + error)
}
