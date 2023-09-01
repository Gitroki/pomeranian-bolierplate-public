import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <div>
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit"
      />
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
          suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
          aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
          tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit"
      />
      <SingleQuestion question="Test 1" answer="Answer 1" />
    </div>
  );
};
