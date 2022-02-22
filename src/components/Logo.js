import Logo from './logo.png'
import {Image} from '@chakra-ui/react';
export default function LogoPNG(props) {
    return (
        <>
            <Image ms='auto' me='auto' htmlWidth={props.width+'px'} src={Logo} alt="Vive"/>
        </>
    )
}