import { Image } from 'react-bootstrap';
function Flag({ src, cls }) {

    return (
        <Image src={src} className={cls} fluid style={{ width: 50 }} />
    )
}

export default Flag