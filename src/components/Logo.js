import Logo from './logo.png'
import {Image, Heading} from '@chakra-ui/react';
export default function LogoPNG(props) {
    return (
        <>
            <Heading as="h4" color='#008441'>Vive</Heading>
            {/* <Image ms='auto' me='auto' htmlWidth={props.width+'px'} src={Logo} alt="Vive"/> */}
        </>
    )
}