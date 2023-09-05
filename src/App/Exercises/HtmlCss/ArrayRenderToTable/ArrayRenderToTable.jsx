import './styles.css';

export const ArrayRenderToTable = () => {
  const DATA = ['Saab', 'Volvo', 'BMW'];

  const bands = [
    {
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];

  return (
    <>
      <table>
        <tr>
          <th>Zespol</th>
          <th>Rok powsgania</th>
          <th>ilosc albumow</th>
          <th>ulubiona piosenka</th>
        </tr>
        {bands.map((band) => (
          <tr>
            <td>{band.band}</td>
            <td>{band.yearFormed}</td>
            <td>{band.albums}</td>
            <td>{band.mostFamousSong}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
