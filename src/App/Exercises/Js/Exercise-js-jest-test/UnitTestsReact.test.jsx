import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { ComponentForTest } from './ReactComponents/ComponentForTest';

describe('Basic unit tests JSX components', () => {
  //assertions (asercje)
  test('should render correctly', () => {
    // renderuje ten komponent jak po stronie przeglądatki
    const { getAllByText } = render(<ComponentForTest />);

    //pobiera jeden element o określontym tekście
    const elements = getAllByText('Kliknij mnie');
    // const button = screen.queryAllByText('button');

    //assercja - czy element istnieje w sztucznym srodowiksu przegladarki/React
    expect(elements[0]).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
  });

  //assertions (asercje)
  test('should render text after button click', () => {
    // renderuje ten komponent jak po stronie przeglądatki
    const { getByText } = render(<ComponentForTest />);

    //pobiera jeden element o określontym tekście
    const button = getByText('Kliknij UNIQUE');

    //odpala event click oraz dokonuje wyrenderowania nowego elemntu
    fireEvent.click(button);

    // pobiera nowo wyrenderowany element
    const newElement = getByText('Tekst po załadowaniu');

    //assercja - czy element istnieje w sztucznym srodowiksu przegladarki/React
    expect(newElement).toBeInTheDocument();
  });

  describe('Async code tests', () => {
    test('should render proper text', async () => {
      // renderuje ten komponent jak po stronie przeglądatki
      const { getByTestId } = render(<ComponentForTest />);

      //assercja - czy element istnieje w sztucznym srodowiksu przegladarki/React z wykorzystanie specjalnej funkcji do obłsugi asynchroinicznosc awaitFor
      await waitFor(
        () => {
          //pobiera jeden element o określontym id
          const element = getByTestId('test-for-async-call');

          expect(element).toBeInTheDocument();
        },
        { timeout: 4000 }
      );
    });
  });
});
