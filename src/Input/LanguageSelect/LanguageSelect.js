import React, { Component } from 'react';

import { SecondaryColor } from '../../Style/Colors';

import {
  IconContainer, LanguageItemWrapper, LanguageContainer, LanguageItem, LanguageLabel,
} from '../../Style/Input/LanguageSelectStyle';
import { DropdownLabelWrapper } from '../../Style/Navigation/DropdownStyle';

import { Icon } from '../../General/Icon';
class LanguageSelect extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: props.defaultItem && props.defaultItem.title ? props.defaultItem.title : 'EN',
      color: props.color ? props.color : SecondaryColor.white,
    };
  }

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

   handleItemClick = async (item) => {
     const { onChange } = this.props;
     onChange(item);
     this.setState({
       isOpen: false,
       title: item.title,
     });
   }

   render() {
     const {
       languageItem, center, hoverColor, backGroundColor,
     } = this.props;
     const {
       isOpen, title, color,
     } = this.state;
     return (
       <LanguageContainer
         size="medium"
         open={isOpen}
         onClick={this.handleOpen}
         onBlur={this.handleClickOutside}
         tabIndex="0"
         hoverColor={hoverColor}
         backGroundColor={backGroundColor}
       >
         <DropdownLabelWrapper spaceBetween={false} {...this.props}>
           <IconContainer>
             <Icon name="globe" size="19" color={color} />
           </IconContainer>
           <LanguageLabel color={color}>
             {title}
           </LanguageLabel>
           <Icon name="arrow-down" size="15" color={color} />
         </DropdownLabelWrapper>
         <If condition={isOpen}>
           <LanguageItemWrapper center={center}>
             <For each="item" of={languageItem}>
               <LanguageItem
                 key={item.label}
                 onClick={() => this.handleItemClick(item)}
               >
                 {item.label}
               </LanguageItem>
             </For>
           </LanguageItemWrapper>
         </If>
       </LanguageContainer>
     );
   }
}

LanguageSelect.defaultProps = {
  onChange: () => {},
};

type State = {
  isOpen: boolean,
  flag: string,
  title: string,
  color: string
}

type Props = {
    center: boolean,
    languageItem: array,
    defaultItem: object,
    hoverColor: string,
    onChange: Function
  };

export default LanguageSelect;
