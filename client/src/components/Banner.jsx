import Cover from '../images/cover.jpg';
import User from '../images/user.jpg'
const Banner = () => {

    return(

        <div className="relative">
            <img src={Cover} alt="Cover photo" className="h-72 w-full object-cover"  />
            <img src={User} alt="User photo" className="h-24 rounded-full object-cover absolute right-0 left-0 mx-auto bottom-0 translate-y-1/2" />
        </div>
    )
}
export default Banner