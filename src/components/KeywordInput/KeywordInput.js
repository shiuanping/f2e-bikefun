import React from "react"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

import { Icons } from '../Icons/icons'

import { Input, Icon } from "./style"
const KeywordInput = (props) => {
    const{setKeyWord} = props;
    return (
        <Input>
            <input type="text" placeholder="輸入關鍵字" onChange={e => setKeyWord(e.target.value)} />
            <Icon>
                <Icons.Search />
            </Icon>
        </Input>
    )
}

export default KeywordInput