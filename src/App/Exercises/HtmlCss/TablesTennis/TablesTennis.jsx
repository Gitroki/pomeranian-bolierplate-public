import './styles.css';
import first from './star.svg';

export const TablesTennis = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#10001</td>
          <td className="star">
            <img src={first} alt="star" />
            <img src={first} alt="star" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#10002</td>
          <td className="star">
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#10003</td>
          <td className="star">
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#10004</td>
          <td className="star">
            <img src={first} alt="star" />
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#10005</td>
          <td className="star">
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
            <img src={first} alt="star" />
          </td>
        </tr>
      </table>
    </div>
  );
};
