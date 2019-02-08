import { Animated } from 'react-animated-css';

class Animated extends Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft"  isVisible={true}>
          <div>
              hello world ;)
          </div>
      </Animated>
    );
  }
}


export default Animated;
