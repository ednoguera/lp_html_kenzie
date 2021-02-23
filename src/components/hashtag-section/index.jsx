import React from 'react'
import Hashtag from './hashtag'
import { HashSection } from '../../styles/styled-components'
import { colors } from '../../styles/colors'

const HashtagSection = () => {

    const { cian } = colors
    const { purple } = colors

    return (
        <HashSection>
            <Hashtag tag="KENZIEMADE" color={purple} />
            <Hashtag tag="SOUKENZIE" color={cian} />
            <Hashtag tag="NINGUEMMESEGURA" color={purple} />
        </HashSection>
    )
}

export default HashtagSection