import React from 'react'
import Wrapper from './Wrapper'
//함수에 props라는 파라미터를 가져온다
export default function Food({color,fav,isSpecial}) {
    return (
        <Wrapper>
            <div style={{color}}>
                I love {fav} {isSpecial ? <b>없음 못살아 정말 못살아</b> : <span>하지만 없어도살아</span>}
                {/* I love {fav} {isSpecial && <b>없음 못살아 정말 못살아2</b>} */}
            </div>
        </Wrapper>
    )
}

Food.defaultProps = {
    fav:'chicken'
}