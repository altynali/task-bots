import React, {Component} from 'react';


class Loading extends Component {

  render() {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-defaultGray-100 h-16 w-16"/>
      </div>
    )
  }

}

export default Loading;