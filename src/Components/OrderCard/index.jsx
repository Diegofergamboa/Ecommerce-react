import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types'; 

const OrderCard = props => {
    const { title, imageUrl, price } = props;
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-15">
                    <img className='w-full h-full rounded-lg object-cover' alt={title} src={imageUrl} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">${price}</p>
                <FaWindowClose className="h-6 text-black cursor-pointer" />
            </div>
        </div>
    );
}

OrderCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number
}

export { OrderCard }