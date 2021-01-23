const backendConfig = require('../index');
const frontendConfig = require('../frontend');

describe('config', () => {
  it('should handle backend and frontend configs', () => {
    expect(backendConfig).toMatchSnapshot();
    expect(frontendConfig).toMatchSnapshot();
  });
});
