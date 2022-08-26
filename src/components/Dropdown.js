import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownMenu = (props) => {
  const { captions, setStyle } = props;
  // const filteredOptions = captions.filter((elem, i) => indices.indexOf(i) != -1);
  // const filteredLinks = clickers.filter((elem, i) => indices.indexOf(i) != -1);
  // const defaultOption = "Sounds of Beijing";
  //
  // const changeFuncs = {};
  // for (let i = 0; i < indices.length; i++){
  //   changeFuncs[filteredOptions[i]] = filteredLinks[i];
  // }
  const onChange = function(a) {
    setStyle(a);
  }

  return <Dropdown options={captions}
                   onChange={onChange}
                   value={null}
                   placeholder="Select a style."
         />;
};


export default DropdownMenu;
