import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
class Test extends Component {
    render() {
        const TodoStore = this.props.TodoStore;
        return (
            <React.Fragment>
                {TodoStore.getEnableButton && 
                    <button onClick={(event)=>TodoStore.setEnableButton(false)}style={{
                        backgroundColor:'red',
                        color:'#ffffff'
                    }}>Button Enabled</button>
                }
                {!TodoStore.getEnableButton && 
                    <button style={{
                        backgroundColor:'blue',
                        color:'#ffffff'
                    }}>Button Disabled</button>
                }
             
            </React.Fragment>
        );
    }
}

Test.propTypes = {

};

export default Test;