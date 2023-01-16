import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableItem from '../components/TableItem';
import { Provider } from 'react-redux';
import { store } from '../app/store';

const apiData = JSON.parse(`{
    "id": 1,
    "name": "cerulean",
    "year": 2000,
    "color": "#98B2D1",
    "pantone_value": "15-4020"
  }`);

describe('ProductsTableItem', () => {
  it('should render an item', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <TableItem tableItem={apiData} />
          </tbody>
        </table>
      </Provider>
    );

    expect(screen.getByText(apiData.id)).toBeInTheDocument();
    expect(screen.getByText(apiData.name)).toBeInTheDocument();
  });
});
