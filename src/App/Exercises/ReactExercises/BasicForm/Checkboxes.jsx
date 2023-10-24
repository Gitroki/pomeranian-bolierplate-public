import './Checkboxes.css';
export const Checkboxes = ({ list, onChange }) => {
  function handleClick(name, isCheck) {
    onChange(name, isCheck);
  }
  return list.map((item) => (
    <div
      className="checkboxes-item"
      key={item.value}
      onClick={() => handleClick(item.value, item.isCheck)}
    >
      <div
        className={`checboxes-item-checkmark ${
          item.isCheck && 'checboxes-item-checkmark--checked'
        }`}
      >
        {item.isCheck && <>&#10003;</>}
      </div>
      {item.label}
    </div>
  ));
};
