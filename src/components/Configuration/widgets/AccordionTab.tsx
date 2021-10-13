import MarkIcon from '../../../assets/svgs/mark-icon.svg';
import UnmarkIcon from '../../../assets/svgs/empty-radio.svg';

const AccordionTab = ({
  content: { id, title, content, subContent, isMarked },
  selected,
  handleClick,
}) => {
  return (
    <div onClick={handleClick}>
      <div className='accordion'>
        <img src={selected === id ? MarkIcon : UnmarkIcon} alt='mark-icon' />
        <div className={`accordion__tab ${selected === id && 'selected'}`}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>

      <div
        className={`accordion__content  ${
          selected === id ? 'show__accordion' : 'hide__accordion'
        }`}
      >
        <h4>{subContent.title}</h4>
        <p>{subContent.content}</p>
      </div>
    </div>
  );
};

export default AccordionTab;
