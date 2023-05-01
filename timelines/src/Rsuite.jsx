import { Timeline } from 'rsuite';
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

const Rsuite = ()=> {
  return (
    <Timeline>
        <Timeline.Item>16:27:41 Your order starts processing</Timeline.Item>
        <Timeline.Item>16:28:43 Your order to be ready for delivery</Timeline.Item>
        <Timeline.Item>16:28:45 Your parcel has been out of the library</Timeline.Item>
    </Timeline>
  )
}

export default Rsuite;