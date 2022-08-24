import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React from 'react'

export const Region = ({ region }) => {
  const router = useRouter();

    const onClick = () => {
        router.push(`/region/${ region.name }`);
  }
  
  return (
          <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } >
        <Card 
            hoverable
            pressable
            onClick={ onClick }
      >
        <Card.Footer>
                <Row justify='space-between'>
                <Text transform='capitalize'>{ region.name }</Text>
                </Row>
        </Card.Footer>
        /</Card>
      /</Grid>
  )
}