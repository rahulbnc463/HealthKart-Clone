import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect,useState } from 'react';
import AdminNav from './AdminNav';
import { getProduct } from './getProduct';


function StatsCard(props) {
  const { title, stat,bg } = props;
  return (

  

    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      backgroundColor={bg}
      rounded={'lg'}>
      <StatLabel fontWeight={'700'} fontSize={'lg'} isTruncated>
        {title}
      </StatLabel>
      <br />
      <StatNumber fontSize={'2xl'} fontWeight={'700'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Dashboard() {

  const [product,setProduct] = useState([])

  useEffect(()=>{
    getProduct().then((res) => {
      setProduct(res);
     
    })
  })
  
  return (
    <>
     <AdminNav/>
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Dashboard
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} >
        <StatsCard bg='pink' title={'Total Sales'} stat={'₹ 98657'} />
        <StatsCard bg='lightgreen' title={'Total Products'} stat={product.length} />
        <StatsCard bg='skyblue' title={'Orders'} stat={'1'} />
      </SimpleGrid>
    </Box>
    </>
  );
}
