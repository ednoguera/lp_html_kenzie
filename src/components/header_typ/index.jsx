import React from 'react'
import HashtagSection from '../../components/hashtag-section/'
import { HeaderTypSection } from '../../styles/styled-components'
import { motion } from 'framer-motion'
import { OrderedList, TextFinal } from '../../styles/styled-components'
import useWindowSize from '../../helper/use-window-hook'

const HeaderTyp = props => {
    // const { width } = useWindowSize()

    return (
        <HeaderTypSection>
            <div>
                <h2>{props.title}</h2>
            </div>
            {/* {width > 425 ? <iframe width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : <iframe width="300" height="169" src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>} */}

            <div>
                {/* <motion.a href={props.urlTelegram} target="_blank" >
                    <motion.button style={props.styleBtnTelegram} whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                        whileTap={{ scale: 0.9 }}>{props.ctaTelegram}</motion.button>
                </motion.a> */}
                <OrderedList>
                    <TextFinal>
                        <p>{props.itemList1}</p>
                    </TextFinal>
                    <motion.a href={props.urlYoutube} target="_blank">
                        <motion.button style={props.styleBtnYoutube} whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                        }}
                            whileTap={{ scale: 0.9 }}>{props.ctaYoutube}</motion.button>
                    </motion.a>
                    <TextFinal>
                        <p>{props.itemList2}</p>
                    </TextFinal>
                </OrderedList>
                <TextFinal>
                    <p>
                        {props.text}
                    </p>
                </TextFinal>

            </div>
            <HashtagSection />
        </HeaderTypSection>
    )
}

export default HeaderTyp