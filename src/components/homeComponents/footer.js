import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaSymbol} from '@fortawesome/fontawesome-svg-core'
import { faTelevision } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


function Footer() {

    const facebook = <FontAwesomeIcon icon="face-drooling" />
    //const twiter = <FontAwesomeIcon icon={faVideoCamera} />
    //const insta = <FontAwesomeIcon icon={faTelevision} />



    return ( 
        <div className="container p-4 text-center d-flex justify-content-evenly myfooter">
            <a href='https://facebook.com/codewithbethel' target='_blank'>Facebook</a>
            <a href="https://twitter.com/codewithbethel" target='_blank'>Twitter</a>
            <a href='https://instagram.com/codewithbethe' target='_blank'>Instagram</a>
        </div>
     );
}

export default Footer;