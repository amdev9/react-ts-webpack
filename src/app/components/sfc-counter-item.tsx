import * as React from "react";
// import  { Permission } from '../redux/reducers/state';

interface SFCCounterItemProps {
  item: string,
  onTogglePerm?: () => any
}
 
//@todo read data & assets from AppsManager for icons preview
export class SFCCounterItem extends React.Component< SFCCounterItemProps, { checked?: boolean }> { 
  constructor(props: SFCCounterItemProps) {
    super(props);
    this.state = {
      checked: false
    };
    
  }  

  public render() {
    const { item, onTogglePerm } = this.props;
 

    return (
      <div>
        <label>
          {item}
          <input
            name={item}
            type="checkbox"
            checked={this.state.checked}
            onClick={() => { onTogglePerm(); }}
             />
             {/* onChange={this.handleInputChange} */}
        </label>
      </div>
    )
  }
}

